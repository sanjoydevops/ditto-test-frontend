import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import './JoinTeam.scss';
import dittoMarcNewWhiteLogoFinal from '../../assets/img/DittoMarc-new-white-logo-final.png';

import FooterBottom from '../../components/FooterBottom';
import { TeamAction } from '../../store/actions';

const JoinTeam = () => {
  const dispatch = useDispatch();
  const { teamId } = useParams();
  const team = useSelector(state => ({ ...state.detail.team }));
  const onJoinTeam = event => {
    event.preventDefault();
    dispatch(TeamAction.joinTeam(teamId));
  };
  useEffect(() => {
    dispatch(TeamAction.viewTeam(teamId));
  }, [dispatch, teamId]);
  return (
    <div className="container-fluid VerificationMail">
      <section className="VerificationMail-inner">
        <div className="VerificationMail-header">
          <Link to="/">
            <img alt="logo" src={dittoMarcNewWhiteLogoFinal} />
          </Link>
        </div>
        <div className="VerificationMail-body">
          <div className="VerificationMail-body-inner">
            <h3>Team Invitation</h3>
            <p>
              You have been invited by {team.user?.username} to join {team.name}.
              <br />
              Accept To Play Or Decline.
            </p>
            <div className="button-sec">
              <button className="accept-btn" onClick={onJoinTeam}>
                Accept
              </button>
              <button className="decline-btn">
                <Link to="/profile">Decline</Link>
              </button> 
            </div> 
            <div className="VerificationMail-footer">
              <p>Thanks,<br />Dittomarc</p>
            </div>
          </div>
        </div>
      </section>
      <FooterBottom />
    </div>
  );
};

export default JoinTeam;
