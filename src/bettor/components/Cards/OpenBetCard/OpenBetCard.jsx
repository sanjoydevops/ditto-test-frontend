import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './OpenBetCard.scss';
import defaultProfilePhoto from '../../../assets/img/default-profile-photo.png';

import BetDescription from '../../Bet/BetDescription';
import { BetAction } from '../../../store/actions';

const OpenBetCard = ({ bet }) => {
  const dispatch = useDispatch();
  const onCancelBet = () => dispatch(BetAction.cancelBet(bet?.id));
  return (
    <div className="profile-info">
      <div className="info-header">
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
        <div className="details">
          <BetDescription bet={bet} />
          <p>
            Amount :
            {' '}
            <span>
              ${bet?.amount}
            </span>
          </p>
          <p>
            Max Spend :
            {' '}
            <span>
              ${bet?.max_spend}
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
            Play for {bet?.coin_type_text}
          </div>
        </div>
      </div>
      <div className='info-footer'>
        <button className="btn btn-block btn-p-c-info bet-btn-place" onClick={onCancelBet}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OpenBetCard;
