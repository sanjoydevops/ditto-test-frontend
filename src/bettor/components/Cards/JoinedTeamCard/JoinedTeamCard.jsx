import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './JoinedTeamCard.scss';
import chatIconFinalBigger from '../../../assets/img/Chat-Icon-Final-Bigger.svg';
import defaultProfilePhoto from '../../../assets/img/default-profile-photo.png';
import dittoMarcNewCoinFinal from '../../../assets/img/DittoMarc-new-coin-final.png';

import { AppAction, TeamAction } from '../../../store/actions';

const JoinedTeamCard = ({ team }) => {
  const dispatch = useDispatch();
  const onLeaveTeamClick = () => {
    dispatch(TeamAction.leaveTeam(team?.id));
  };
  const onPlaceBetModalOpen = () => dispatch(AppAction.toggle({
    key: 'placeBetModal',
    value: { team, type: 2 },
  }));
  return (
    <div className="profile-info opens-team">
      <div className="top-button">
        <span className="float-left img">
          <img
            alt="place-bet"
            onClick={onPlaceBetModalOpen}
            src={dittoMarcNewCoinFinal}
          />
        </span>
        <Link to={`/chat/team/${team?.id}`}>
          <img
            alt="chat"
            className="float-right"
            src={chatIconFinalBigger}
          />
        </Link>
      </div>
      <div className="slider">
        <Link to={`/view-profile/${team?.user?.id}`}>
          <div className="slider-img">
              <img
                alt={`team ${team?.id}`}
                className="img-fluid"
                src={team?.user?.profile?.photo || defaultProfilePhoto}
              />
          </div>
        </Link>
      </div>
      <div className="details">
        <h4>
          {team?.name}
        </h4>
      </div>
      <button
        className="btn btn-block btn-p-a-info bg-black"
        onClick={onLeaveTeamClick}
        type="button"
      >
        Leave Team
      </button>
    </div>
  );
};

export default JoinedTeamCard;
