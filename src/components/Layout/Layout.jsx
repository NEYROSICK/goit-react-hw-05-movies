import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
