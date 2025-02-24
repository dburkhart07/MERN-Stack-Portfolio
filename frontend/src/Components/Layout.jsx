import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow overflow-auto bg-[rgb(85,17,0)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
