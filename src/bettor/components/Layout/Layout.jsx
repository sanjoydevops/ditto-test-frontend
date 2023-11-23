import React, { Fragment } from 'react';

import AskQuestion from '../AskQuestion';
import Header from '../Header';
import Footer from '../Footer';
import Modals from '../Modals';

const Layout = ({ children, empty }) => [
  empty ? <Fragment key={1}>{children}</Fragment> : (
    <Fragment key={1}>
      <AskQuestion />
      <div className="wrapper">
        <Header />
        <section className="dash-content-section">
          {children}
        </section>
        <Footer />
      </div>
    </Fragment>
  ),
  <Modals key={2} />,
];

export default Layout;
