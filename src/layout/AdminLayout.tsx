import Footer from '@/components/Footer';
import Header from '@/components/Header';

const AdminLayout = ({ children }:any) => {
    return (
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default AdminLayout;