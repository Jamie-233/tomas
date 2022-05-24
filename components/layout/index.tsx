import type { ReactElement } from 'react';
import type { NextPage } from 'next';
import Navbar from 'components/navbar';
import Footer from 'components/footer';

interface INextPage {
  children: ReactElement;
}

const Layout: NextPage<INextPage> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
