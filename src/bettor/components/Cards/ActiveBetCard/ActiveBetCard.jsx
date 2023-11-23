import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './ActiveBetCard.scss';
import defaultProfilePhoto from '../../../assets/img/default-profile-photo.png';

import BetDescription from '../../Bet/BetDescription';
import { AppAction } from '../../../store/actions';

const ActiveBetCard = ({ bet }) => {
  const dispatch = useDispatch();
  const authUserId = useSelector(state => state.auth.user.id);
  const onCompleteBetModalOpen = () => dispatch(AppAction.toggle({
    key: 'completeBetModal',
    value: bet,
  }));
  const onViewJoinedBetMembersModalOpen = () => dispatch(AppAction.toggle({
    key: 'viewJoinedBetMembersModal',
    value: bet,
  }));
  return (
    <div className="profile-info">
      <div className="slider">
        <Link to={`/view-profile/${bet?.user?.id}`}>
          <div className="slider-img">
              <img
                alt={`bet ${bet?.id}`}
                className="img-fluid"
                src={bet?.user?.profile?.photo || defaultProfilePhoto}
              />
          </div>
        </Link>
      </div>
      <div className="details d-active">
        <div className="type">
          <h6>{bet?.user?.username}</h6>
        </div>
        <BetDescription bet={bet} />
        <p>
          Amount :
          {' '}
          <span>
            ${bet?.amount}
          </span>
        </p>
        {authUserId === bet?.user?.id && (
          <p>
            Max Spend :
            {' '}
            <span>
              ${bet?.max_spend}
            </span>
          </p>
        )}
        {bet?.odds && (
          <p>
            Odds :
            {' '}
            <span>
              {bet?.odds_from}-{bet?.odds_to}
            </span>
          </p>
        )}
        {bet?.spread && (
          <p>
            Spread :
            {' '}
            <span>
              {bet?.spread}
            </span>
          </p>
        )}
        <p>
          Created At :
          {' '}
          <span>
            {bet?.created_date}
            {' '}
            {bet?.created_time}
          </span>
        </p>
        <p>
          Expiration Time :
          {' '}
          <span>
            {bet?.expired_date}
            {' '}
            {bet?.expired_time}
          </span>
        </p>
        <div className={classNames('fun', {
          'text-green': bet?.coin_type === 1,
          'text-red': bet?.coin_type === 2,
        })}>
          Play for {bet?.coin_type_text}
        </div>
      </div>
      <button className="btn btn-link" onClick={onViewJoinedBetMembersModalOpen}>
        View Joined Members
      </button>
      <button className="btn btn-block btn-p-a-info bg-black" onClick={onCompleteBetModalOpen}>
        Complete It!
      </button>
    </div>
  );
};

export default ActiveBetCard;
