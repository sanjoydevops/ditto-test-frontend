import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import chatIconFinalBigger from '../../assets/img/Chat-Icon-Final-Bigger.svg';
// import dittoMatchesWhiteIcon from '../../assets/img/DittoMatchesWhiteIcon.png';
import defaultProfilePhoto from '../../assets/img/default-profile-photo.png';
import dittoMarcNewCoinFinal from '../../assets/img/DittoMarc-new-coin-final.png';

import BadgeImage from '../../../shared/components/BadgeImage';
import StarRating from '../../../shared/components/StarRating';
import { AppAction, BetAction, UserAction } from '../../store/actions';

const Matches = () => {
  const dispatch = useDispatch();
  const matchUsers = useSelector(state => state.list.user?.match || []);
  const betBadgeOptions = [{ label: 'All', value: 'all' }, { label: 'No Badge', value: 0 }, { label: 'Sore Loser', value: 1 }, { label: 'So-So', value: 2 }, { label: 'Great', value: 3 }];
  const betFilterOptions = useSelector(state => state.list.betFilterOption?.all || []);
  const [betBadge, setBetBadge] = useState('');
  const [betRating, setBetRating] = useState('');
  const [betRadius, setBetRadius] = useState('');
  const [userLatitude, setUserLatitude] = useState('');
  const [userLongitude, setUserLongitude] = useState('');
  
  const onFilter = () => dispatch(UserAction.listMatchUsers({
    bet_badge: betBadge,
    bet_rating: betRating,
    radius: betRadius,
    latitude: userLatitude,
    longitude: userLongitude,
  }));
  const onPlaceBetModalOpen = (user, type) => dispatch(AppAction.toggle({
    key: 'placeBetModal',
    value: { type, user },
  })); 
  useEffect(() => {
    dispatch(UserAction.listMatchUsers());
    dispatch(BetAction.listBetFilterOptions());
    navigator.geolocation.getCurrentPosition(function(position) {
      setUserLatitude(position.coords.latitude)
      setUserLongitude(position.coords.longitude)
    });
  }, [dispatch]);

  
  return (
    <div className="container w-1734 opens-my">
      <div className="dash-content ditto-match-content">
        <div className="row">
          <div className="col">
            <div className="dash1-content-head">
              {/* <h5><img src={dittoMatchesWhiteIcon} alt="" /> DittoMatch</h5> */}
              <h5> DittoMatch</h5>
            </div>
          </div>
        </div>
        <div className="form-row mt-3">
          <div className="col">
            <select
              className="form-control"
              name="bet_badge"
              onChange={event => setBetBadge(event.target.value)}
              value={betBadge}
            >
              <option value="">Bet Badge</option>
              {betBadgeOptions.map((option, i) => (
                <option key={i} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <select
              className="form-control"
              name="bet_rating"
              onChange={event => setBetRating(event.target.value)}
              value={betRating}
            > 
              <option value="">Bet Rating</option>
              {betFilterOptions.map((option, i) => (
                <option
                  key={i}
                  dangerouslySetInnerHTML={{__html: isNaN(option.label)
                    ? option.label
                    : Array(5).fill(0).map((_, i) => (++i <= option.value ? '&#9733' : '&#9734;')).join('')}}
                  value={option.value}
                />
              ))}
            </select>
          </div>
          <div className="col">
            <input 
             className="form-control"
             name="radius" 
             placeholder='Radius'
             onKeyUp={ event => setBetRadius(event.target.value)} 
             type="text" />  
          </div>
          <div className="col">
            <button className="btn btn-light btn-block" onClick={onFilter} type="button">
              Filter
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="ditto-match-list table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <td>Image</td>
                    <td>Name</td>
                    <td>Rating</td>
                    <td>Type Of User ( Badge )</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {matchUsers.map((user, i) => (
                    <tr key={i}>
                      <td>
                        <div className="user-photo">
                          <Link to={`/view-profile/${user.id}`}>
                            <img
                              alt="profile"
                              src={user.profile.photo || defaultProfilePhoto}
                            />
                          </Link>
                        </div>
                      </td>
                      <td>{user.username}</td>
                      <td>
                        {user.profile.rating_value > 0 && (
                          <StarRating styleType="5" value={user.profile.rating_value} />
                        )}
                      </td>
                      <td>
                        {user.profile.badge_info && (
                          <div className="user-type text-green">
                            <BadgeImage color="green" height="24" value={user.profile.badge_info.value}  width="24" />
                            {user.profile.badge_info.label}
                          </div>
                        )}
                      </td>
                      <td>
                        <div className="action-image">
                          <Link to={`/chat/user/${user.id}`}>
                            <img
                              alt="chat"
                              height="30px"
                              src={chatIconFinalBigger}
                              width="30px"
                            />
                          </Link>
                          <button
                            className="btn p-0"
                            onClick={() => onPlaceBetModalOpen(user, 4)}
                            type="button"
                          >
                            <img
                              alt="coin"
                              height="35px"
                              src={dittoMarcNewCoinFinal}
                              width="35px"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="table-scroll-left"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
