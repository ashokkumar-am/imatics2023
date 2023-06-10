import Footer from '@/components/Footer';
import Header from '@/components/Header';

const RootLayout = ({ children }:any) => {
    return (
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default RootLayout;