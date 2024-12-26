
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
          <ToastContainer></ToastContainer>
     
      <Navbar />
     
      <div className='min-h-[calc(100vh-365px)]'>
        <Outlet />
      </div>
     
      <Footer />
    </div>
    );
};

export default MainLayout;