import React from 'react';
/* todo: search box
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; */
import { Dropdown, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';

import './Header.scss';
import aboutUs from '../../assets/img/AboutUs.png';
import changePasswordIcon from '../../assets/img/ChangePasswordIcon.png';
import chatIcon5 from '../../assets/img/ChatIcon5.png';
import contactUsIcon5 from '../../assets/img/ContactUsIcon5.png';
// import dashboardIcon from '../../assets/img/DashboardIcon.png';
import defaultProfilePhoto from '../../assets/img/default-profile-photo.png';
import dittoBetsIconn5 from '../../assets/img/DittoBetsIconn5.png';
import dittoMarcLogoIconFinal from '../../assets/img/DittoMarc-logo-icon-final.png';
import dittoMarcNewLogoFinal from '../../assets/img/DittoMarc-new-logo-final.png';
import dittoMatchesIcon5 from '../../assets/img/DittoMatchesIcon5.png';
import dittoOffersIcon from '../../assets/img/DittoOffersIcon.png';
import homeIcon from '../../assets/img/HomeIcon.png';
import howtoPlayIcon from '../../assets/img/HowtoPlayIcon.png';
import loginIcon from '../../assets/img/LoginIcon.png';
import logoutIcon from '../../assets/img/LogoutIcon.png';
import paymentIcon5 from '../../assets/img/PaymentIcon5.png';
import profileIcon from '../../assets/img/ProfileIcon.png';
import referIcon from '../../assets/img/ReferIcon.png';
import registationIcon from '../../assets/img/RegistationIcon.png';
import teamsIcon5 from '../../assets/img/teamsicon5.png';
import termsnConditionIcon from '../../assets/img/TermsnConditionIcon.png';

import NotificationMenu from '../NotificationMenu';
import { AppAction, AuthAction } from '../../store/actions';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { messageableId } = useParams();
  const authUser = useSelector(state => ({ ...state.auth.user }));
  const chatTeam = useSelector(state => state.chat.team);
  const allTeams = useSelector(state => state.list.team?.all || []);
  const onLogout = event => {
    event.preventDefault();
    dispatch(AuthAction.logout());
  };
  const onReferModalOpen = () => dispatch(AppAction.toggle({
    key: 'referModal',
    value: true,
  }));
  return (
    <Navbar className="deshboard-head navbar-dark" expand="lg">
      <div className="logo-team">
        <div className="logo">
          <Link className="d-none d-md-block" to="/">
            <img alt="logo" className="img-fluid" src={dittoMarcNewLogoFinal} />
          </Link>
          <Link className="d-xl-none d-lg-none d-md-none" to="/">
            <img alt="logo" className="img-fluid" src={dittoMarcLogoIconFinal} />
          </Link>
        </div>
        {location.pathname.startsWith('/chat') && allTeams.length > 0 && (
          <div className="team">
            <Dropdown>
              <Dropdown.Toggle as="a" className="btn" id="team-dropdown">
                {chatTeam && chatTeam.id === Number(messageableId) ? chatTeam.name : 'Team'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {allTeams.map((team, i) => (
                  <Link className="dropdown-item" key={i} to={`/chat/team/${team.id}`}>
                    {team.name}
                  </Link>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </div>
      <div className="ml-auto search-profile">
        {/* todo: search box
        <div className="input-group top-search d-none">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
          <input className="form-control" name="search" placeholder="Search" type="text" />
        </div> */}
        <Navbar.Toggle />
        <Navbar.Collapse className="collapse-mobile">
          <ul className="nav navbar-nav">
            {authUser.is_logged_in && (<>
              <li>
                <button className="btn nav-link refer-button" onClick={onReferModalOpen}>
                  <img alt="refer" src={referIcon} />
                  {' '}
                  Refer
                </button>
              </li>
              <NotificationMenu />
            </>)}
            {authUser.is_logged_in ? (
              <Dropdown as="li" className="dropdown nav-item profile" drop="right">
                <Dropdown.Toggle as="a" className="nav-link" id="profile-dropdown">
                  <img
                    alt="User"
                    className="img-fluid user-image"
                    src={authUser.profile?.photo || defaultProfilePhoto}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-profile">
                  <Link className="dropdown-item" to="/">
                    <img alt="home" src={homeIcon} />
                    Home
                  </Link>
                  {/* <Link className="dropdown-item" to="/dashboard">
                    <img alt="dashboard" src={dashboardIcon} />
                    Dashboard
                  </Link> */}
                  <Link className="dropdown-item" to="/profile">
                    <img alt="profile" src={profileIcon} />
                    Profile
                  </Link>
                  <Link className="dropdown-item" to="/chat">
                    <img alt="chat" src={chatIcon5} />
                    Chat
                  </Link>
                  <Link className="dropdown-item" to="/payment">
                    <img alt="payment" src={paymentIcon5} />
                    Payment
                  </Link>
                  <Link className="dropdown-item" to="/bets">
                    <img alt="bets" src={dittoBetsIconn5} />
                    DittoBets
                  </Link>
                  <Link className="dropdown-item" to="/teams">
                    <img alt="teams" src={teamsIcon5} />
                    Teams
                  </Link>
                  <Link className="dropdown-item" to="/offers">
                    <img alt="offers" src={dittoOffersIcon} />
                    DittoOffers
                  </Link>
                  <Link className="dropdown-item" to="/matches">
                    <img alt="matches" src={dittoMatchesIcon5} />
                    DittoMatches
                  </Link>
                  <Link className="dropdown-item" to="/change-password">
                    <img alt="change-password" src={changePasswordIcon} />
                    Change Password
                  </Link>
                  {/* todo: ask a question
                  <Link className="dropdown-item" to="/">
                    <img alt="ask-question" src={aboutUs} />
                    Ask A Question
                  </Link> */}
                  <Link className="dropdown-item" onClick={onLogout} to="/">
                    <img alt="logout" src={logoutIcon} />
                    Logout
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Dropdown as="li" className="dropdown nav-item profile menu-login" drop="right">
                <Dropdown.Toggle as="a" className="nav-link" id="profile-dropdown">
                  LOGIN
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-profile">
                  <Link className="dropdown-item" to="/login">
                    <img alt="login" src={loginIcon} />
                    Login
                  </Link>
                  <Link className="dropdown-item" to="/registration">
                    <img alt="registration" src={registationIcon} />
                    Registration
                  </Link>
                  <Link className="dropdown-item" to="/contact-us">
                    <img alt="contact-us" src={contactUsIcon5} />
                    Contact Us
                  </Link>
                  <Link className="dropdown-item" to="/terms-and-conditions">
                    <img alt="terms-and-conditions" src={termsnConditionIcon} />
                    Terms and Conditions
                  </Link>
                  <Link className="dropdown-item" to="/how-it-works">
                    <img alt="how-it-works" src={howtoPlayIcon} />
                    How it Works
                  </Link>
                  <Link className="dropdown-item" to="/about-us">
                    <img alt="about-us" src={aboutUs} />
                    About us
                  </Link>
                  {/* todo: ask a question
                  <Link className="dropdown-item" to="/">
                    <img alt="ask-question" src={aboutUs} />
                    Ask A Question
                  </Link> */}
                </Dropdown.Menu>
              </Dropdown>
            )}
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
