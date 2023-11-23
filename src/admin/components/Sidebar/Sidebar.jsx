import React from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import adminLteLogo from '../../assets/img/AdminLTELogo.png';
import defaultProfilePhoto from '../../assets/img/default-profile-photo.png';

import NavTreeView from '../NavTreeView';
import { AuthAction } from '../../store/actions';

const Sidebar = ({ isSidebarSmOpen, onSidebarOpen }) => {
  const dispatch = useDispatch();
  const { user: authUser, permissions: authPermissions } = useSelector(state => state.auth);
  const onLogout = event => {
    event.preventDefault();
    dispatch(AuthAction.logout());
  };
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <div>
        <span className="brand-link">
          <Link to="/admin/dashboard">
            <img
              src={adminLteLogo}
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: 0.8 }}
            />
            <span className="brand-text font-weight-light text-white">
              Ditto Admin
            </span>
          </Link>
          {isSidebarSmOpen && (
            <span className="float-right d-xl-none" onClick={onSidebarOpen}>
              <i className="fas fa-times"></i>
            </span>
          )}
        </span>
      </div>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={defaultProfilePhoto}
              className="img-circle elevation-2"
              alt="User"
            />
          </div>
          <div className="info">
            <Link className="d-block" to="/admin/dashboard">
              {authUser.name}
            </Link>
          </div>
        </div>
        <nav className="mt-2">
          <Nav as="ul" className="nav-sidebar flex-column" variant="pills">
            {authPermissions.includes('bet.list') && (
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/admin/bets">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Bets</p>
                </NavLink>
              </Nav.Item>
            )}
            {authPermissions.includes('user.list') && (
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/admin/users">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Users</p>
                </NavLink>
              </Nav.Item>
            )}
            {authPermissions.includes('team.list') && (
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/admin/teams">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Teams</p>
                </NavLink>
              </Nav.Item>
            )}
            {authPermissions.includes('contact-us.list') && (
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/admin/contact-us">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Contact Us</p>
                </NavLink>
              </Nav.Item>
            )}
            {authPermissions.includes('transaction.list') && (
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/admin/transactions">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Transactions</p>
                </NavLink>
              </Nav.Item>
            )}
            {authPermissions.includes('referral.list') && (
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/admin/referrals">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Referrals</p>
                </NavLink>
              </Nav.Item>
            )}
            {authPermissions.some(p => [
              'report.joined-user',
              'report.referral',
              'report.top-winner',
            ].includes(p)) && (
              <NavTreeView icon="fa-th" isOpen={false} name="report" title="Reports">
                {authPermissions.includes('report.joined-user') && (
                  <Nav.Item as="li">
                    <NavLink className="nav-link" to="/admin/report/joined-user">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Joined User Report</p>
                    </NavLink>
                  </Nav.Item>
                )}
                {authPermissions.includes('report.referral') && (
                  <Nav.Item as="li">
                    <NavLink className="nav-link" to="/admin/report/referral">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Referral Report</p>
                    </NavLink>
                  </Nav.Item>
                )}
                {authPermissions.includes('report.top-winner') && (
                  <Nav.Item as="li">
                    <NavLink className="nav-link" to="/admin/report/top-winner">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Top Winner Report</p>
                    </NavLink>
                  </Nav.Item>
                )}
              </NavTreeView>
            )}
            {authPermissions.some(p => ['restricted-location.add', 'restricted-location.list'].includes(p)) && (
              <NavTreeView icon="fa-th" isOpen={false} name="restrictedLocation" title="Restricted Locations">
                {authPermissions.includes('restricted-location.list') && (
                  <Nav.Item as="li">
                    <NavLink className="nav-link" to="/admin/restricted-locations">
                      <i className="far fa-circle nav-icon"></i>
                      <p>List Restricted Locations</p>
                    </NavLink>
                  </Nav.Item>
                )}
                {authPermissions.includes('restricted-location.add') && (
                  <Nav.Item as="li">
                    <NavLink className="nav-link" to="/admin/add-restricted-location">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Add Restricted Location</p>
                    </NavLink>
                  </Nav.Item>
                )}
              </NavTreeView>
            )}
            {authPermissions.some(p => ['about-us.create', 'about-us.list'].includes(p)) && (
              <NavTreeView icon="fa-th" isOpen={false} name="aboutUs" title="About Us">
                <Nav.Item as="li">
                  {authPermissions.includes('about-us.list') && (
                    <NavLink className="nav-link" to="/admin/about-us">
                      <i className="far fa-circle nav-icon"></i>
                      <p>List About Us</p>
                    </NavLink>
                  )}
                  {authPermissions.includes('about-us.create') && (
                    <NavLink className="nav-link" to="/admin/create-about-us">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Create About Us</p>
                    </NavLink>
                  )}
                </Nav.Item>
              </NavTreeView>
            )}
            {authPermissions.some(p => ['frequently-asked-question.create', 'frequently-asked-question.list'].includes(p)) && (
              <NavTreeView icon="fa-th" isOpen={false} name="frequentlyAskedQuestions" title="FAQ">
                <Nav.Item as="li">
                  {authPermissions.includes('frequently-asked-question.list') && (
                    <NavLink className="nav-link" to="/admin/frequently-asked-questions">
                      <i className="far fa-circle nav-icon"></i>
                      <p>List FAQ</p>
                    </NavLink>
                  )}
                  {authPermissions.includes('frequently-asked-question.create') && (
                    <NavLink className="nav-link" to="/admin/create-frequently-asked-question">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Create FAQ</p>
                    </NavLink>
                  )}
                </Nav.Item>
              </NavTreeView>
            )}
            {authPermissions.some(p => ['video-tutorial.create', 'video-tutorial.list'].includes(p)) && (
              <NavTreeView icon="fa-th" isOpen={false} name="videoTutorials" title="Video Tutorials">
                <Nav.Item as="li">
                  {authPermissions.includes('video-tutorial.list') && (
                    <NavLink className="nav-link" to="/admin/video-tutorials">
                      <i className="far fa-circle nav-icon"></i>
                      <p>List Video Tutorials</p>
                    </NavLink>
                  )}
                  {authPermissions.includes('video-tutorial.create') && (
                    <NavLink className="nav-link" to="/admin/create-video-tutorial">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Create Video Tutorial</p>
                    </NavLink>
                  )}
                </Nav.Item>
              </NavTreeView>
            )}
            {authPermissions.some(p => ['role.create', 'role.list'].includes(p)) && (
              <NavTreeView icon="fa-th" isOpen={false} name="roles" title="Roles">
                <Nav.Item as="li">
                  {authPermissions.includes('role.list') && (
                    <NavLink className="nav-link" to="/admin/roles">
                      <i className="far fa-circle nav-icon"></i>
                      <p>List Roles</p>
                    </NavLink>
                  )}
                  {authPermissions.includes('role.create') && (
                    <NavLink className="nav-link" to="/admin/create-role">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Create Role</p>
                    </NavLink>
                  )}
                </Nav.Item>
              </NavTreeView>
            )}
            {authPermissions.some(p => ['admin.create', 'admin.list'].includes(p)) && (
              <NavTreeView icon="fa-th" isOpen={false} name="admins" title="Admins">
                <Nav.Item as="li">
                  {authPermissions.includes('admin.list') && (
                    <NavLink className="nav-link" to="/admin/admins">
                      <i className="far fa-circle nav-icon"></i>
                      <p>List Admins</p>
                    </NavLink>
                  )}
                  {authPermissions.includes('admin.create') && (
                    <NavLink className="nav-link" to="/admin/create-admin">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Create Admin</p>
                    </NavLink>
                  )}
                </Nav.Item>
              </NavTreeView>
            )}
            {authPermissions.includes('auth.change-password') && (
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/admin/change-password">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Change Password</p>
                </NavLink>
              </Nav.Item>
            )}
            <Nav.Item as="li">
              <Nav.Link as="span" onClick={onLogout} role="button">
                <i className="far fa-circle nav-icon"></i>
                <p>Logout</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </nav>
      </div>
    </aside>
  );
};

Sidebar.Control = () => (
  <aside className="control-sidebar control-sidebar-dark">
    <div className="p-3">
      <h5>Title</h5>
      <p>Sidebar content</p>
    </div>
  </aside>
);

export default Sidebar;
