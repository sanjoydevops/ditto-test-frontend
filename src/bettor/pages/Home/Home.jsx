import React, { Fragment, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Home.scss';
import banner1 from '../../assets/img/banner-1.png';
import banner2 from '../../assets/img/banner-2.png';
import banner3 from '../../assets/img/banner-3.png';
import banner4 from '../../assets/img/banner-4.png';
import banner5 from '../../assets/img/banner-5.png';
import banner6 from '../../assets/img/banner-6.png';
import bannerImage from '../../assets/img/Banner-Image.png';
import chatIconBigger from '../../assets/img/chat-Icon-bigger.png';
import cryptoLogo from '../../assets/img/crypto-logo.png';
import defaultProfilePhoto from '../../assets/img/default-profile-photo.png';
import dittoMarcNewCoinFinal from '../../assets/img/DittoMarc-new-coin-final.png';

import { AppAction, BetAction, UserAction } from '../../store/actions';
import BadgeImage from '../../../shared/components/BadgeImage';
import StarRating from '../../../shared/components/StarRating';

const Home = () => {
  const dispatch = useDispatch();
  const authUser = useSelector(state => ({ ...state.auth.user }));
  const leaderBoardUsers = useSelector(state => state.list.user?.leaderBoard || []);
  const offerBets = useSelector(state => state.list.bet?.offer || []);
  const matchUsers = useSelector(state => state.list.user?.match || []);
  const onPlaceBetModalOpen = (user, type) => dispatch(AppAction.toggle({
    key: 'placeBetModal',
    value: { type, user },
  }));
  useEffect(() => {
    dispatch(BetAction.listOfferBets());
    dispatch(UserAction.listLeaderBoardUsers());
    dispatch(UserAction.listMatchUsers());
  }, [dispatch]);
  return (
    <div className="background-image homepage">
      <div className="homepage__slider-container">
        <div className="container ditto-default-container ">
          <div className="homepage__slider-part">
            <div className="homepage__carousel-field">
              <Carousel controls={false}>
                <Carousel.Item>
                  <img alt="banner" className="d-block w-100" src={bannerImage} />
                  <Carousel.Caption bsPrefix className="homepage__banner-left-block">
                    <h1>RAISING<br />THE STAKES</h1>
                    <h3>Peer-to-Peer Betting</h3>
                    <h4>Bet on <span>anything</span> with <span>anyone</span></h4>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img alt="banner" className="d-block w-100" src={banner1} />
                </Carousel.Item>
                <Carousel.Item>
                  <img alt="banner" className="d-block w-100" src={banner2} />
                </Carousel.Item>
                <Carousel.Item>
                  <img alt="banner" className="d-block w-100" src={banner3} />
                </Carousel.Item>
                <Carousel.Item>
                  <img alt="banner" className="d-block w-100" src={banner4} />
                </Carousel.Item>
                <Carousel.Item>
                  <img alt="banner" className="d-block w-100" src={banner5} />
                </Carousel.Item>
                <Carousel.Item>
                  <img alt="banner" className="d-block w-100" src={banner6} />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="container ditto-default-container">
        <div className="homepage__banner-button-block">
          {!authUser.is_logged_in && (
            <Link className="homepage__join-now-button" to="/registration">
              Join Now
            </Link>
          )}
          <Link className="homepage__how-it-works" to="/how-it-works">
            How It Works!
          </Link>
        </div>
      </div>
      <div className="container ditto-default-container">
        <div className="main-body-left-top-dv"></div>
      </div>
      <div className="container ditto-default-container mt-4">
        <div className="homepage__AboutUs">
          <div className="homepage__AboutUs_Content">
            <div className="homepage__About">
              <h3 className="homepage__title">ABOUT US</h3>
                <p>DittoMarc is a Social and Peer-to-Peer wagering platform for Casual Bettor, Gamers, and Sports Fans. 
                  BET on ANYTHING with ANYONE!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container ditto-default-container">
        <div className="homepage__match-result-cards">
          <div className="row">
            <div className="col-md-4 homepage__tab-padding mt-4">
              <div className="homepage__card-bg-image">
                <img alt="coin" className="homepage__bg-coin" src={dittoMarcNewCoinFinal} />
                <div className="card-bg">
                  <div className="homepage__match-result-card dittoOffers mt-2">
                    <div className="homepage__match-result-card-header">
                      <h3>DittoOffers</h3>
                      <i className="fas fa-chevron-circle-right"></i>
                    </div>
                    <div className="homepage__match-result-card-body">
                      <div className="homepage__single-user-field">
                        {offerBets.slice(0, 5).map((bet, i) => (
                          <Fragment key={i}>
                            <div className="homepage__single-user-content Ditto_Offer">
                              <div className="homepage__single-user-image">
                                <Link to={`/view-profile/${bet.user?.id}`}>
                                  <img alt="leader-board" src={bet.user?.profile?.photo || defaultProfilePhoto} />
                                </Link>
                              </div>
                              <div className="homepage__single-user-name">
                                <p>{bet.user?.username}</p>
                              </div>
                              <div className="homepage__single-user-icon">
                                <i className="fas fa-chevron-circle-right"></i>
                              </div>
                            </div>
                            <hr />
                          </Fragment>
                        ))}
                        <div className="homepage__see-all-offer">
                          <Link to="/offers">See All Offers</Link>
                          <i className="far fa-arrow-alt-circle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 homepage__tab-padding mt-4">
              <div className="homepage__card-bg-image">
                <img alt="coin" className="homepage__bg-coin" src={dittoMarcNewCoinFinal} />
                <div className="homepage__match-result-card leader-board mt-2">
                  <div className="homepage__match-result-card-header">
                    <h3>Leader Board</h3>
                    <i className="fas fa-chevron-circle-right"></i>
                  </div>
                  <div className="homepage__match-result-card-body">
                    <div className="homepage__single-user-field">
                      {leaderBoardUsers.slice(0, 5).map((user, i) => (
                        <Fragment key={i}>
                          <div className="homepage__single-user-content">
                            <div className="homepage__single-user-image">
                              <Link to={`/view-profile/${user?.id}`}>
                                <img alt="leader-board" src={user?.profile?.photo || defaultProfilePhoto} />
                              </Link>
                            </div>
                            <div className="homepage__single-user-name">
                              <p>{user?.username}</p>
                            </div>
                            <div className="homepage__single-user-rate">
                              <p>{user?.profile?.red_coin_balance}</p>
                            </div>
                            <div className="homepage__single-user-icon-lb">
                              {user?.profile?.red_coin_fluctuant > 0 && (<>
                                <i className="fas fa-arrow-up color-green"></i>
                                <p><span className="color-green">{user?.profile?.red_coin_fluctuant}</span> UP</p>
                              </>)}
                              {user?.profile?.red_coin_fluctuant < 0 && (<>
                                <i className="fas fa-arrow-down homepage__color-red"></i>
                                <p><span className="homepage__color-red">{Math.abs(user?.profile?.red_coin_fluctuant)}</span> DOWN</p>
                              </>)}
                            </div>
                          </div>
                          <hr />
                        </Fragment>
                      ))}
                      <div className="homepage__see-all-offer">
                        <Link to="/leader-board">See All Leaders</Link>
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 homepage__tab-padding col-12 mt-4">
              <div className="homepage__card-bg-image">
                <img alt="coin" className="homepage__bg-coin" src={dittoMarcNewCoinFinal} />
                <div className="homepage__match-result-card leader-board match-users mt-2">
                  <div className="homepage__match-result-card-header">
                    <h3>DittoMatch</h3>
                    <i className="fas fa-chevron-circle-right"></i>
                  </div>
                  <div className="homepage__match-result-card-body">
                    <div className="homepage__single-user-field">
                      {matchUsers.slice(0, 5).map((user, i) => (
                        <Fragment key={i}>
                          <div className="homepage__single-user-content">
                            <div className="homepage__single-user-match-image">
                              <Link to={`/view-profile/${user?.id}`}>
                                <img alt="leader-board" src={user?.profile?.photo || defaultProfilePhoto} />
                              </Link>
                            </div>
                            <div className="homepage__single-user-match-name">
                              <p>{user?.username}</p>
                              {user?.profile?.badge_info && (
                                <span className="homepage__single-user-match-badge">
                                  <BadgeImage color="green" fluid value={user?.profile?.badge_info?.value} />
                                </span>
                              )}
                              {user?.profile?.rating_value > 0 && (
                                <span className="homepage__single-user-match-rating">
                                  <StarRating styleType="4" value={user?.profile?.rating_value} />
                                </span>
                              )}
                            </div>
                            <div className="homepage__single-user-match-message">
                              <Link to={`/chat/user/${user?.id}`}>
                                <img alt="chat" src={chatIconBigger} />
                              </Link>
                            </div>
                            <div className="homepage__single-user-icon-match-lb">
                              <img
                                alt="logo"
                                onClick={() => onPlaceBetModalOpen(user, 4)}
                                src={dittoMarcNewCoinFinal}
                              />
                            </div>
                          </div>
                          <hr />
                        </Fragment>
                      ))}
                      <div className="homepage__see-all-offer">
                        <Link to="/matches">See All Matches</Link>
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ditto-default-container mt-5">
        <div className="homepage__menu-list-body">
          <div className="col-md-12">
            <div className="homepage__coin-icon-bg">
              <img alt="coin" src={dittoMarcNewCoinFinal} />
            </div>
            <div className="homepage__title-menu-field">
              <div className="homepage__title-menu-content">
                <li>
                  <Link to="/trending">Live Trending </Link>
                </li>
                <li>
                  <Link to="/offers">Daily Odds/Spreads</Link>
                </li>
                <li>
                  <Link to="/chat">DittoChat</Link>
                </li>
                <li>
                  <Link to="/how-it-works">DittoStream</Link>
                </li>
                <li>
                  <Link to="/offers">Play For Profit</Link>
                </li>
                <li>
                  <Link to="/offers">Play For Fun</Link>
                </li>
                <li>
                  <Link to="/bets">DittoBets</Link>
                </li>
                <li>
                  <Link to="/live">DittoLive</Link>
                </li>
                <li>
                  <span className="homepage__title-menu-content-info">Keep 100% of ALL Bets</span>
                </li>
                <li>
                  <span className="homepage__title-menu-content-info">No Signup Fee</span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ditto-default-container mt-4">
        <div className="homepage__crypto-field">
          <div className="homepage__crypto-content-field">
            <a href="https://www.dittopeer.com/" rel="noopener noreferrer" target="_blank">
              <img alt="crypto" src={cryptoLogo} />
            </a>
            <h5>DITTOPEER CRYPTO</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
