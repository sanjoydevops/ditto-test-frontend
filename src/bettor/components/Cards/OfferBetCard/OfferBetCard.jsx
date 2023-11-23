import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './OfferBetCard.scss';
import defaultProfilePhoto from '../../../assets/img/default-profile-photo.png';

import BetDescription from '../../Bet/BetDescription';
import { BetAction } from '../../../store/actions';

const OfferBetCard = ({ bet }) => {
  const dispatch = useDispatch();
  const onAcceptBet = () => dispatch(BetAction.acceptBet(bet?.id));
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
      <button className="btn btn-block btn-p-a-info bg-black" onClick={onAcceptBet}>
        Accept
      </button>
    </div>
  );
};

export default OfferBetCard;
