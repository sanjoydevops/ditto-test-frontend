import React, { useEffect, useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// import bettingInfoIcon from '../../assets/img/BettingInfoIcon.png';
import chatIconFinalBigger from '../../assets/img/Chat-Icon-Final-Bigger.svg';
import coverPhoto from '../../assets/img/cover-photo.jpg';
import defaultProfilePhoto from '../../assets/img/default-profile-photo.png';
import dIcon from '../../assets/img/DIcon.png';
import dittoBetsIcon from '../../assets/img/DittoBetsIcon.png';
import dittoMarcMewCoinFinal from '../../assets/img/DittoMarc-new-coin-final.png';
// import dittoMatchesWhiteIcon from '../../assets/img/DittoMatchesWhiteIcon.png';
// import dittoOffersIcon from '../../assets/img/DittoOffersIcon.png';
import editIcon from '../../assets/img/EditIcon.png';
import nextArrowIcon from '../../assets/img/NextArrowIcon.png';
import nextCaretRoundedIcon from '../../assets/img/NextCaretroundedIcon.png';
// import teamsIcon from '../../assets/img/TeamsIcon.png';

import BetOrTeamList from '../../components/BetOrTeamList';
import {
  AppAction,
  BetAction,
  ProfileAction,
  TeamAction,
  UserAction,
} from '../../store/actions';
import BadgeImage from '../../../shared/components/BadgeImage';
import StarRating from '../../../shared/components/StarRating';

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authUserProfile = useSelector(state => ({ ...state.auth.user?.profile }));
  const myTeams = useSelector(state => state.list.team?.my || []);
  const joinedTeams = useSelector(state => state.list.team?.joined || []);
  const openBets = useSelector(state => state.list.bet?.open || []);
  const activeBets = useSelector(state => state.list.bet?.active || []);
  const completedBets = useSelector(state => state.list.bet?.completed || []);
  const invitedBets = useSelector(state => state.list.bet?.invited || []);
  const offerBets = useSelector(state => state.list.bet?.offer || []);
  const matchUsers = useSelector(state => state.list.user?.match || []);
  const [toggleNotification, setToggleNotification] = useState(!authUserProfile.notification_muted_at);
  const onCreateNewTeamModalOpen = () => dispatch(AppAction.toggle({
    key: 'createNewTeamModal',
    value: true,
  }));
  const onPlaceBetModalOpen = (user, type) => dispatch(AppAction.toggle({
    key: 'placeBetModal',
    value: { type, user },
  }));
  const onProfileCoverUpload = event => {
    dispatch(ProfileAction.uploadProfileCover({
      cover: event.target.files[0],
    }));
    event.target.value = '';
  };
  const onProfilePhotoUpload = event => {
    dispatch(ProfileAction.uploadProfilePhoto({
      photo: event.target.files[0],
    }));
    event.target.value = '';
  };
  const onProfileNotificationToggle = value => dispatch(
    ProfileAction.toggleProfileNotification({ notification: value }),
  );
  useEffect(() => {
    dispatch(BetAction.listOpenBets());
    dispatch(BetAction.listActiveBets());
    dispatch(BetAction.listCompletedBets());
    dispatch(BetAction.listInvitedBets());
    dispatch(BetAction.listOfferBets());
    dispatch(TeamAction.listJoinedTeams());
    dispatch(TeamAction.listMyTeams());
    dispatch(UserAction.listMatchUsers());
  }, [dispatch]);
  useEffect(() => {
    const { first_name, last_name, state, zip_code, country } = authUserProfile
    if (!(first_name && last_name && state && zip_code && country )) {
      history.push('/profile-edit');
    }
  }, [authUserProfile, history]);
  return (
    <div className="container w-1740 opens-my">
      <div className="row">
        <div className="col">
          <div className="profile-content-head">
            <img
              alt="cover"
              className="img-fluid cover-photo"
              src={authUserProfile.cover || coverPhoto}
            />
            <div className="change-cover">
              <div className="custom-file">
                <input
                  accept="image/jpeg, image/png"
                  className="custom-file-input"
                  name="profile_cover"
                  onChange={onProfileCoverUpload}
                  type="file"
                />
                <label className="custom-file-label">
                  Change Cover
                  {' '}
                  <i className="fas fa-camera"></i>
                </label>
              </div>
            </div>
            <div className="profile-photo">
              <div className="photo">
                <img
                  alt={`user ${authUserProfile.user_id}`}
                  className="img-fluid"
                  src={authUserProfile.photo || defaultProfilePhoto}
                />
                <div className="custom-file">
                  <input
                    accept="image/jpeg, image/png"
                    className="custom-file-input"
                    name="profile_photo"
                    onChange={onProfilePhotoUpload}
                    type="file"
                  />
                  <label className="custom-file-label">
                    <i className="fas fa-camera"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="info">
              <h5>{authUserProfile.full_name}</h5>
              {authUserProfile.state && authUserProfile.country && (
                <div className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  {`${authUserProfile.state}, ${authUserProfile.country}`}
                </div>
              )}
              {authUserProfile.rating_value > 0 && (
                <div className="ratting text-green">
                  Bet Rating:
                  <span className="rat"> {authUserProfile.rating_value}</span>
                  <StarRating styleType="1" value={authUserProfile.rating_value} />
                </div>
              )}
              <div className="type">
                {authUserProfile.badge_info && (
                  <div className="class">
                    <BadgeImage color="default" fluid value={authUserProfile.badge_info.value} />
                    <span className="mobile-d-none"> {authUserProfile.badge_info.label}</span>
                  </div>
                )}
                <div className="bet">
                  <img alt="total-bet" className="img-fluid" src={dittoBetsIcon} />
                  <span className="mobile-d-none">Total Bets: </span>
                  {authUserProfile.total_bets}
                </div>
                <div className="p-info">
                  <Link to="/profile-edit">
                    <i className="fas fa-user-alt"></i> <span className="mobile-d-none">Personal Info</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="notification">
              <div className="custom-control custom-switch">
                <input
                  checked={toggleNotification}
                  className="custom-control-input"
                  id="toggle-notification"
                  name="toggle_notification"
                  onChange={() => {
                    setToggleNotification(!toggleNotification);
                    onProfileNotificationToggle(!toggleNotification);
                  }}
                  type="checkbox"
                />
                <span className="mobile-d-none">
                  Notification
                </span>
                <label
                  className="custom-control-label"
                  htmlFor="toggle-notification"
                />
              </div>
            </div>
            <div className="range text-center">
              <div className="member">
                <h3>{authUserProfile.created_date}</h3>
                <h6>Member Since</h6>
              </div>
              {authUserProfile.bet_range_text && (<>
                <div className="line"></div>
                <div className="member text-center">
                  <h3>
                    <img alt="bet-range" src={dIcon} />
                    {authUserProfile.bet_range_text}
                  </h3>
                  <h6>Betting Range</h6>
                </div>
              </>)}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9">
          <div className="profile-team w-1296">
            <div className="profile-team-head">
              {/* <h5><img alt="bets" src={dittoBetsIcon} /> DittoBets</h5> */}
              <h5> DittoBets</h5>
            </div>
            <Tab.Container defaultActiveKey="open-bets">
              <div className="profile-team-tab">
                <Nav as="ul" className="nav-tabs">
                  <Nav.Item as="li">
                    <Nav.Link eventKey="open-bets">Open Bets</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="active-bets">Active Bets</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="completed-bets">Completed Bets</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="invited-bets">Bet Invitations</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="open-bets">
                    <BetOrTeamList data={openBets} more tab="open-bets" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="active-bets">
                    <BetOrTeamList data={activeBets} more tab="active-bets" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="completed-bets">
                    <BetOrTeamList data={completedBets} more tab="completed-bets" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="invited-bets">
                    <BetOrTeamList data={invitedBets} more tab="invited-bets" />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
          <div className="separate-line"></div>
          <div className="profile-team w-1296">
            <div className="profile-team-head">
              {/* <h5><img alt="teams" src={teamsIcon} /> Teams <span className="float-right">+Create Team</span></h5> */}
              <h5>
                Teams
                <span className="float-right" onClick={onCreateNewTeamModalOpen}>
                  +Create Team
                </span>
              </h5>
            </div>
            <Tab.Container defaultActiveKey="my-teams">
              <div className="profile-team-tab">
                <Nav as="ul" className="nav-tabs">
                  <Nav.Item as="li">
                    <Nav.Link eventKey="my-teams">My Teams</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="joined-teams">Joined Teams</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="my-teams">
                    <BetOrTeamList data={myTeams} tab="my-teams" more />
                  </Tab.Pane>
                  <Tab.Pane eventKey="joined-teams">
                    <BetOrTeamList data={joinedTeams} tab="joined-teams" more />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
          <div className="separate-line"></div>
          <div className="profile-team w-1296 mb-4">
            <div className="profile-team-head">
              <h5>
                {/* <img alt="betting information" src={bettingInfoIcon} /> Betting Information */}
                Betting Information
                <Link className="float-right" to="/profile-edit">
                  <img alt="edit-button" src={editIcon} />
                </Link>
              </h5>
            </div>
            <div className="profile-bet-info">
              <div className="bet-left">
                Bet Rating
              </div>
              <div className="bet-right">
                {authUserProfile.rating_value > 0 && (<>
                  <span className="mr-2">{authUserProfile.rating_value}</span>
                  <StarRating styleType="1" value={authUserProfile.rating_value} />
                </>)}
              </div>
            </div>
            <div className="profile-bet-info">
              <div className="bet-left">
                Badge
              </div>
              <div className="bet-right img">
                {authUserProfile.badge_info && (<>
                  <BadgeImage color="default" value={authUserProfile.badge_info.value} />
                  {' '}
                  ({authUserProfile.badge_info.label})
                </>)}
              </div>
            </div>
            <div className="profile-bet-info">
              <div className="bet-left">
                Total Bets
              </div>
              <div className="bet-right">
                {authUserProfile.total_bets}
              </div>
            </div>
            <div className="profile-bet-info">
              <div className="bet-left">
                Bettting Preferences
              </div>
              <div className="bet-right">
                {authUserProfile.bet_preferences_formatted_text}
              </div>
            </div>
            <div className="profile-bet-info">
              <div className="bet-left">
                Betting Range
              </div>
              <div className="bet-right img">
                <img alt="bet-range" src={dIcon} />
                {' '}
                {authUserProfile.bet_range_text}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="ditti-offer-main profile-team float-right">
            <div className="offer-head">
              <h5>
                <img alt="coin" src={dittoMarcMewCoinFinal} />
                DittoBalance
              </h5>
            </div>
            <Tab.Container defaultActiveKey="profit">
              <div className="profile-team-tab ditto-balance-tab">
                <Nav as="ul" className="nav-tabs">
                  <Nav.Item as="li">
                    <Nav.Link eventKey="profit">Profit</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="fun">
                    <Nav.Link eventKey="fun">Fun</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="profit">
                    <div className="row">
                      <div className="col">
                        <div className="ditto-bal-inner">
                          <div className="balance">
                            <h5>Balance</h5>
                            <h3 className="green">
                              {authUserProfile.green_coin_balance}
                            </h3>
                          </div>
                          <Link className="btn btn-block btn-ditt-bal green" to="/payment">
                            +Add DittoMarcs
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fun">
                    <div className="row">
                      <div className="col">
                        <div className="ditto-bal-inner">
                          <div className="balance">
                            <h5>Balance</h5>
                            <h3 className="red">
                              {authUserProfile.red_coin_balance}
                            </h3>
                          </div>
                          <Link className="btn btn-block btn-ditt-bal red" to="/payment">
                            +Add DittoMarcs
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
          {offerBets.length > 0 && (<>
            <div className="space"></div>
            <div className="ditti-offer-main float-right">
              <div className="offer-head">
                {/* <h5><img alt="offers" src={dittoOffersIcon} /> DittoOffers</h5> */}
                <h5>DittoOffers</h5>
              </div>
              <div className="ditto-offer-inner">
                <ul>
                  {offerBets.slice(0, 5).map((bet, i) => (
                    <li key={i}>
                      <Link className="link" to={`/view-profile/${bet.user?.id}`}>
                        <div className="image">
                          <img
                            alt="profile"
                            src={bet.user?.profile?.photo || defaultProfilePhoto}
                          />
                        </div>
                        <div className="name">
                          {bet.user?.username}
                        </div>
                        <div className="btn-go">
                          <img alt="go-button" src={nextCaretRoundedIcon} />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div>
                  <Link className="float-right text-green pro-more-button" to="/offers">
                    See All Offers
                    <img alt="offers" src={nextArrowIcon} />
                  </Link>
                </div>
              </div>
            </div>
          </>)}
          <div className="space"></div>
          <div className="ditti-offer-main float-right">
            <div className="offer-head">
              {/* <h5><img alt="matches" src={dittoMatchesWhiteIcon} /> DittoMatch</h5> */}
              <h5> DittoMatch</h5>
            </div>
            <div className="ditto-match-inner">
              <ul>
                {matchUsers.slice(0, 5).map((user, i) => (
                  <li className="list" key={i}>
                    <div className="image">
                      <Link to={`/view-profile/${user.id}`}>
                        <img
                          alt="profile"
                          src={user.profile.photo || defaultProfilePhoto}
                        />
                      </Link>
                    </div>
                    <div className="name">
                      <h6>{user.username}</h6>
                      <div>
                        {user.profile.badge_info && (
                          <span className="like">
                            <BadgeImage color="green" value={user.profile.badge_info.value} />
                          </span>
                        )}
                        {user.profile.rating_value > 0 && (
                          <span className="star">
                            <StarRating styleType="3" value={user.profile.rating_value} />
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="message">
                      <Link to={`/chat/user/${user.id}`}>
                        <img alt="chat" src={chatIconFinalBigger} />
                      </Link>
                    </div>
                    <div className="logo">
                      <img
                        alt="logo"
                        onClick={() => onPlaceBetModalOpen(user, 4)}
                        src={dittoMarcMewCoinFinal}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div>
                <Link className="float-right text-green pro-more-button" to="/matches">
                  See All Matches
                  <img alt="matches" src={nextArrowIcon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
