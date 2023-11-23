import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './CompletedBetCard.scss';
import defaultProfilePhoto from '../../../assets/img/default-profile-photo.png';

import BetDescription from '../../Bet/BetDescription';
import { AppAction } from '../../../store/actions';

const CompletedBetCard = ({ bet }) => {
  const dispatch = useDispatch();
  const authUserId = useSelector(state => state.auth.user.id);
  const betHasUser = [bet?.bet_has_user, bet?.users?.find?.(user => user?.id === authUserId)?.user_has_bet].find(i => i);
  const onReviseBetResultModalOpen = () => dispatch(AppAction.toggle({
    key: 'reviseBetResultModal',
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
      <div className="details d-completed">
        {bet?.is_disputed === 1 && (
          <p className="badge badge-danger text-white">
            In Dispute
          </p>
        )}
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
          <span>
            {bet?.created_date}
            {' '}
            {bet?.created_time}
          </span>
        </p>
        <div className={classNames('fun', {
          'text-green': bet?.coin_type === 1,
          'text-red': bet?.coin_type === 2,
        })}>
          Play for {bet?.coin_type_text}
        </div>
      </div>
      <div className={classNames('bot', {
        'text-green': bet?.coin_type === 1,
      })}>
        {betHasUser?.result_text}
      </div>
      {bet?.is_disputed === 1 && !betHasUser?.revised_at && (
        <button className="btn btn-block btn-danger mt-3" onClick={onReviseBetResultModalOpen}>
          Revise Result
        </button>
      )}
    </div>
  );
};

export default CompletedBetCard;
