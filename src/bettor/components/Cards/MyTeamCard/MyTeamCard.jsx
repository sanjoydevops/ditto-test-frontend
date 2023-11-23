import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './MyTeamCard.scss';
import chatIconFinalBigger from '../../../assets/img/Chat-Icon-Final-Bigger.svg';
import defaultProfilePhoto from '../../../assets/img/default-profile-photo.png';
import dittoMarcNewCoinFinal from '../../../assets/img/DittoMarc-new-coin-final.png';
import nextCaretIcon from '../../../assets/img/NextCaretIcon.png';

import { AppAction, TeamAction } from '../../../store/actions';

const MyTeamCard = ({ team }) => {
  const dispatch = useDispatch();
  const onEditTeamModalOpen = () => dispatch(AppAction.toggle({
    key: 'editTeamModal',
    value: team,
  }));
  const onInviteToTeamModalOpen = () => dispatch(AppAction.toggle({
    key: 'inviteToTeamModal',
    value: team,
  }));
  const onPlaceBetModalOpen = () => dispatch(AppAction.toggle({
    key: 'placeBetModal',
    value: { team, type: 2 },
  }));
  const onToggleTeamAccess = () => dispatch(
    TeamAction.toggleTeamAccess(team.id, { access: !team.deactivated_at }),
  );
  return (
    <div className="profile-info opens-team">
      <div className="top-button">
        <span className="float-left img">
          {!team?.deactivated_at && (
            <img
              alt="place-bet"
              onClick={onPlaceBetModalOpen}
              src={dittoMarcNewCoinFinal}
            />
          )}
        </span>
        <button className="btn btn-teams-act" onClick={onToggleTeamAccess}>
          {team?.deactivated_at ? 'Inactive' : 'Active'}
          {' '}
          <img
            alt="active"
            src={nextCaretIcon}
          />
        </button>
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
      {!team?.deactivated_at && (
        <button
          className="btn btn-block btn-p-a-info bg-black"
          onClick={onInviteToTeamModalOpen}
          type="button"
        >
          Invite Now
        </button>
      )}
      <div
        className="edit"
        onClick={onEditTeamModalOpen}
      >
        Edit
      </div>
    </div>
  );
};

export default MyTeamCard;
