import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState<{
    email: string | "";
    password: string | "";
  }>({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const callbackUrl = '/admin/dashboard'
  const handleLogin = useCallback(
    async (e: any) => {
      e.preventDefault();

      if (userInfo.email === "admin@i-matics.com" && userInfo.password === "alliswell@2020") {
        router.push(callbackUrl)
      }
      else {
        alert("Please check your credentials");
      }
    },
    [userInfo, callbackUrl, router]
  );



  return (
    <div className="bg-blue">
      <form className="flex flex-col space-y-4 bg-gray-50 px-4 py-4 sm:px-16" onSubmit={handleLogin}>
        <label
          htmlFor="email"
          className="block text-xs text-gray-600 Titlecase"
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target?.value })
          }
        />
        <label
          htmlFor="password"
          className="block text-xs text-gray-600 Titlecase"
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          value={userInfo.password}
          onChange={({ target }) => {
            setUserInfo({ ...userInfo, password: target?.value });
            setError("");
          }}
        />
        <button className={"flex h-10 w-full items-center bg-blue justify-center rounded-md border"} type="submit">Log In</button>
      </form>
    </div>


    // <form

    //   className="flex flex-col space-y-4 bg-gray-50 px-4 py-4 sm:px-16"
    // >
    //   <div>
    //     <label
    //       htmlFor="email"
    //       className="block text-xs text-gray-600 Titlecase"
    //     >
    //       Email Address
    //     </label>
    //     <input
    //       id="email"
    //       name="email"
    //       type="email"
    //       value={email}
    //       onChange={e => setEmail(e.target.value)}
    //       placeholder="mail@overstockmonuments.com"
    //       autoComplete="email"
    //       required
    //       className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
    //     />
    //   </div>
    //   <div>
    //     <label
    //       htmlFor="password"
    //       className="block text-xs text-gray-600 Titlecase"
    //     >
    //       Password
    //     </label>
    //     <input
    //       id="password"
    //       name="password"
    //       value={password}
    //       onChange={e => setPassword(e.target.value)}
    //       type="password"
    //       placeholder="********"
    //       required
    //       className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
    //     />
    //   </div>
    //   <button
    //     onClick={onSubmit}
    //     className={"flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none"}
    //   >
    //     login
    //   </button>

    // </form>
  );
}
export default LoginPage