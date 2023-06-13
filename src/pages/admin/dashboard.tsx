import LeftSidebar from '@/components/LeftSide';
import MainContent from '@/components/MainContent';
import Navbar from '@/components/Navbar';

const DashboardPage = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default DashboardPage;
