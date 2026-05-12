import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9F7F4' }}>
      <NavBar />
      <main style={{ paddingTop: '67px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;