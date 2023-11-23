import React, { useState } from 'react';
import classNames from 'classnames';
import { /* Dropdown, // todo: chat/message, notification */ Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import defaultProfilePhoto from '../../assets/img/default-profile-photo.png'; // todo: chat/message

import { cancelFullScreen, fullScreenElement, requestFullScreen } from '../../../utils/fullScreen';

const Header = ({ /* onSidebarControlOpen, // todo: hidden right sidebar */ onSidebarOpen }) => {
  // const [isSearchOpen, setIsSearchOpen] = useState(false); // todo: search
  const [isFullScreenElement, setIsFullScreenElement] = useState(fullScreenElement());
  const fullScreenToggle = () => {
    if (isFullScreenElement) requestFullScreen(); else cancelFullScreen();
    setIsFullScreenElement(!isFullScreenElement);
  };
  return (
    <Navbar className="main-header navbar-white">
      <Nav>
        <Nav.Item as="li">
          <Nav.Link as="span" onClick={onSidebarOpen} role="button">
            <i className="fas fa-bars"></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li" className="d-none d-sm-inline-block">
          <Link className="nav-link" to="/admin/dashboard">
            Home
          </Link>
        </Nav.Item>
      </Nav>
      <Nav className="ml-auto">
        {/* todo: search
        <Nav.Item as="li">
          <Nav.Link as="span" onClick={() => setIsSearchOpen(true)} role="button">
            <i className="fas fa-search"></i>
          </Nav.Link>
          <div className={classNames('navbar-search-block', {
            'navbar-search-open': isSearchOpen,
          })}>
            <form className="form-inline">
              <div className="input-group input-group-sm">
                <input
                  aria-label="Search"
                  className="form-control form-control-navbar"
                  name="search"
                  placeholder="Search"
                  type="search"
                />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                  <button
                    className="btn btn-navbar"
                    onClick={() => setIsSearchOpen(false)}
                    type="button"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Nav.Item> */}
        {/* todo: chat/message
        <Dropdown as="li" className="nav-item">
          <Dropdown.Toggle as="span" bsPrefix className="nav-link" role="button">
            <i className="far fa-comments"></i>
            <span className="badge badge-danger navbar-badge">3</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-lg dropdown-menu-right">
            {Array(3).fill(0).map((_, i) => (
              <React.Fragment key={i}>
                <Dropdown.Item href="/">
                  <div className="media">
                    <img
                      src={defaultProfilePhoto}
                      alt="User Avatar"
                      className="img-size-50 mr-3 img-circle"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="float-right text-sm text-danger">
                          <i className="fas fa-star"></i>
                        </span>
                      </h3>
                      <p className="text-sm">Call me whenever you can...</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
              </React.Fragment>
            ))}
            <Dropdown.Item href="/" className="dropdown-footer">
              See All Messages
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        {/* todo: notification
        <Dropdown as="li" className="nav-item">
          <Dropdown.Toggle as="span" bsPrefix className="nav-link" role="button">
            <i className="far fa-bell"></i>
            <span className="badge badge-warning navbar-badge">15</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-lg dropdown-menu-right">
            <Dropdown.Item as="span" bsPrefix className="dropdown-header">
              15 Notifications
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/">
              <i className="fas fa-envelope mr-2"></i> 4 new messages
              <span className="float-right text-muted text-sm">3 mins</span>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/">
              <i className="fas fa-users mr-2"></i> 8 friend requests
              <span className="float-right text-muted text-sm">12 hours</span>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/">
              <i className="fas fa-file mr-2"></i> 3 new reports
              <span className="float-right text-muted text-sm">2 days</span>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/" className="dropdown-footer">
              See All Notifications
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        <Nav.Item as="li">
          <Nav.Link as="span" onClick={fullScreenToggle} role="button">
            <i className={classNames('fas', {
              'fa-compress-arrows-alt': !isFullScreenElement,
              'fa-expand-arrows-alt': isFullScreenElement,
            })}></i>
          </Nav.Link>
        </Nav.Item>
        {/* todo: hidden right sidebar
        <Nav.Item as="li">
          <Nav.Link as="span" onClick={onSidebarControlOpen} role="button">
            <i className="fas fa-th-large"></i>
          </Nav.Link>
        </Nav.Item> */}
      </Nav>
    </Navbar>
  );
};

export default Header;
