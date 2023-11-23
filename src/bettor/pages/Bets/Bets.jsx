import React, { useEffect, useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import dittoBetsIcon from '../../assets/img/DittoBetsIcon.png';

import BetList from '../../components/BetOrTeamList';
import { BetAction } from '../../store/actions';
import useQueryParam from '../../../shared/hooks/useQueryParam';

const Bets = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const tabParam = useQueryParam('tab', 'open-bets');
  const [tabKey, setTabKey] = useState(tabParam);
  const activeBets = useSelector(state => state.list.bet?.active || []);
  const completedBets = useSelector(state => state.list.bet?.completed || []);
  const invitedBets = useSelector(state => state.list.bet?.invited || []);
  const openBets = useSelector(state => state.list.bet?.open || []);
  const onSelect = key => {
    setTabKey(key);
    history.push(`/bets?tab=${key}`);
  };
  useEffect(() => setTabKey(tabParam), [tabParam]);
  useEffect(() => {
    'active-bets' === tabKey && dispatch(BetAction.listActiveBets());
    'completed-bets' === tabKey && dispatch(BetAction.listCompletedBets());
    'invited-bets' === tabKey && dispatch(BetAction.listInvitedBets());
    'open-bets' === tabKey && dispatch(BetAction.listOpenBets());
  }, [dispatch, tabKey]);
  return (
    <div className="container w-1734 opens-my">
      <div className="row">
        <div className="col">
          <div className="profile-team">
            <div className="profile-team-head">
              {/* <h5><img alt="bets" src={dittoBetsIcon} /> DittoBets</h5> */}
              <h5> DittoBets</h5>
            </div>
            <Tab.Container activeKey={tabKey} onSelect={onSelect}>
              <div className="profile-team-tab">
                <Nav as="ul" className="nav-tabs">
                  <Nav.Item as="li">
                    <Nav.Link eventKey="open-bets">Open Bets</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="active-bets">Active Bets</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="completed-bets">Completed Bets</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="invited-bets">Bet Invitations</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="open-bets">
                    <BetList data={openBets} tab="open-bets" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="active-bets">
                    <BetList data={activeBets} tab="active-bets" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="completed-bets">
                    <BetList data={completedBets} tab="completed-bets" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="invited-bets">
                    <BetList data={invitedBets} tab="invited-bets" />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bets;
