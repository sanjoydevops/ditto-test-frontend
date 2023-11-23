import React, { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames';

import Breadcrumb from '../Breadcrumb';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';

const Layout = ({ children, empty }) => {
  const [isSidebarControlOpen, setIsSidebarControlOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarSmOpen, setIsSidebarSmOpen] = useState(window.innerWidth <= 991);
  useEffect(() => {
    const onResize = () => setIsSidebarSmOpen(window.innerWidth <= 991);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return empty ? <Fragment>{children}</Fragment> : (
    <div className={classNames('hold-transition sidebar-mini', {
      'control-sidebar-slide-open': isSidebarControlOpen,
      'sidebar-collapse': (isSidebarSmOpen && !isSidebarOpen) || (!isSidebarSmOpen && isSidebarOpen),
      'sidebar-open': isSidebarSmOpen && isSidebarOpen,
      'sidebar-close': isSidebarSmOpen && !isSidebarOpen,
    })}>
      <div className="wrapper">
        <Header
          onSidebarOpen={() => setIsSidebarOpen(!isSidebarOpen)}
          onSidebarControlOpen={() => setIsSidebarControlOpen(!isSidebarControlOpen)}
        />
        <Sidebar
          isSidebarSmOpen={isSidebarSmOpen}
          onSidebarOpen={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <div className="content-wrapper">
          <Breadcrumb />
          <div className="content">
            <div className="container-fluid">{children}</div>
          </div>
        </div>
        <Sidebar.Control />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
