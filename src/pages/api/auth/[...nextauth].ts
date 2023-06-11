import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          const res = JSON.stringify({
            email: "admin@i-matics.com",
            password: "alliswell@2020",
          });
          const user = await JSON.parse(res);
  
          if (res && user) {
            return user;
          }
          return null;
        },
      }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
}

export default NextAuth(authOptions);


// import { AuthOptions, Session, SessionStrategy, User } from "next-auth";
// import { JWT } from "next-auth/jwt";
// export const authOptions: AuthOptions = {
//   providers: [
 
//   ],
//   callbacks: {
//     async jwt({ token, user }: { token: JWT; user?: User }) {
//       return { ...token, ...user };
//     },
//     async session({ session, token }: { session: Session; token: JWT }) {
//       session.user = token as any;
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   jwt: {
//     maxAge: 24 * 60 * 60, //
//   },
//   session: { strategy: "jwt" as SessionStrategy, maxAge: 24 * 60 * 60 }, //24 hrs count * 60-mins count * 60 second
// };