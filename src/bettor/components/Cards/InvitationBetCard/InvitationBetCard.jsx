import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './InvitationBetCard.scss';
import defaultProfilePhoto from '../../../assets/img/default-profile-photo.png';

import BetDescription from '../../Bet/BetDescription';
import { BetAction } from '../../../store/actions';

const InvitationBetCard = ({ bet }) => {
  const dispatch = useDispatch();
  const onAcceptBet = () => dispatch(BetAction.acceptBet(bet?.id));
  const onDeclineBet = () => dispatch(BetAction.declineBet(bet?.id));
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
      <div className="details d-invitations">
        <h6>
          <span>
            by
          </span>
          {' '}
          {bet?.user?.username}
        </h6>
        <BetDescription bet={bet} />
        <p>
          Amount :
          {' '}
          <span>
            ${bet?.amount}
          </span>
        </p>
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
          Type : for {bet?.coin_type_text}
        </div>
      </div>
      <div className="bot">
        <button className="btn btn-p-id-info gold float-left" onClick={onDeclineBet}>
          Decline
        </button>
        <button className="btn btn-p-id-info bg-black text-white float-right" onClick={onAcceptBet}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default InvitationBetCard;
