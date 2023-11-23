import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import coverPhoto from '../../assets/img/cover-photo.jpg';
import defaultProfilePhoto from '../../assets/img/default-profile-photo.png';
import dIcon from '../../assets/img/DIcon.png';
import dittoMarcNewCoinFinal from '../../assets/img/DittoMarc-new-coin-final.png';
// import personalProfile1 from '../../assets/img/PersonalProfile1.png';

import { AppAction, ProfileAction } from '../../store/actions';
import BadgeImage from '../../../shared/components/BadgeImage';
import StarRating from '../../../shared/components/StarRating';

const ViewProfile = () => {
  const dispatch = useDispatch();
  let { userId } = useParams();
  const user = useSelector(state => state.detail.user);
  const onPlaceBetModalOpen = (user, type) => dispatch(AppAction.toggle({
    key: 'placeBetModal',
    value: { type, user },
  }));
  useEffect(() => {
    dispatch(ProfileAction.viewProfile(userId));
  }, [dispatch, userId]);
  return (
    <div className="container w-1740 opens-my">
      <div className="row">
        <div className="col">
          <div className="profile-content-head">
            <img
              alt="cover"
              className="img-fluid cover-photo"
              src={coverPhoto}
            />
            <div className="profile-photo">
              <div className="photo">
                <img
                  alt={`user ${user?.id}`}
                  className="img-fluid"
                  src={user?.profile?.photo || defaultProfilePhoto}
                />
              </div>
            </div>
            <div className="info">
              <h5>{user?.username}</h5>
              {user?.profile?.state && user?.profile?.country && (
                <div className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  {user?.profile?.state}, {user?.profile?.country}
                </div>
              )}
              {user?.profile?.rating_value > 0 && (
                <div className="ratting text-green">
                  Bet Rating:
                  <span className="rat"> {user?.profile?.rating_value}</span>
                  <StarRating styleType="1" value={user?.profile?.rating_value} />
                </div>
              )}
              <div className="type">
                {user?.profile?.badge_info && (
                  <div className="class">
                    <BadgeImage color="default" fluid value={user?.profile?.badge_info?.value} />
                    <span className="mobile-d-none"> {user?.profile?.badge_info?.label}</span>
                  </div>
                )}
                <div className="bet bg-green" onClick={() => onPlaceBetModalOpen(user, 1)}>
                  <img alt="coin" className="img-fluid" src={dittoMarcNewCoinFinal} />
                  <span className="mobile-d-none"> Send Bet</span>
                </div>
                <div className="p-chat">
                  <Link className="d-block" to={`/chat/user/${user?.profile?.user_id}`}>
                    <i className="fas fa-comment-alt"></i>
                    <span className="mobile-d-none"> Chat</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="range text-center">
              <div className="member">
                <h3>{user?.profile?.created_date}</h3>
                <h6>Member Since</h6>
              </div>
              <div className="line"></div>
              <div className="member">
                <h3>
                  <img alt="bet-range" src={dIcon} />
                  {user?.profile?.bet_range_text}
                </h3>
                <h6>Betting Range</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="profile-team">
            <div className="profile-team-head">
              {/* <h5><img src={personalProfile1} alt="" /> Profile</h5> */}
              <h5> Profile</h5>
            </div>
            <div className="profile-bet-info">
              <div className="bet-left">
                Name
              </div>
              <div className="bet-right">
                {user?.username}
              </div>
            </div>
            <div className="profile-bet-info">
              <div className="bet-left">
                Rating
              </div>
              <div className="bet-right">
                {user?.profile?.rating_value > 0 && (<>
                  <span className="mr-2">{user?.profile?.rating_value}</span>
                  <StarRating styleType="1" value={user?.profile?.rating_value} />
                </>)}
              </div>
            </div>
            <div className="profile-bet-info">
              <div className="bet-left">
                Badge
              </div>
              <div className="bet-right img">
                {user?.profile?.badge_info && (<>
                  <BadgeImage color="default" value={user?.profile?.badge_info?.value} />
                  <span className="ml-2">({user?.profile?.badge_info?.label})</span>
                </>)}
              </div>
            </div>
            <div className="profile-bet-info">
              <div className="bet-left">
                Member Since
              </div>
              <div className="bet-right">
                {user?.profile?.created_date}
              </div>
            </div>
            <div className="profile-bet-info">
              <div className="bet-left">
                Total Bets
              </div>
              <div className="bet-right">
                {user?.profile?.total_bets}
              </div>
            </div>
            <div className="profile-bet-info">
              <div className="bet-left">
                Betting Range
              </div>
              <div className="bet-right img">
                <img alt="bet-range" src={dIcon} />
                {' '}
                {user?.profile?.bet_range_text}
              </div>
            </div>
            <div className="profile-bet-info">
              <div className="bet-left">
                Betting Preferences
              </div>
              <div className="bet-right">
                {user?.profile?.bet_preferences_formatted_text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
