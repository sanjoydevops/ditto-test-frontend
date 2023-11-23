import React, { useEffect, useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import teamsIcon from '../../assets/img/TeamsIcon.png';

import TeamList from '../../components/BetOrTeamList';
import { AppAction, TeamAction } from '../../store/actions';
import useQueryParam from '../../../shared/hooks/useQueryParam';

const Teams = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const tabParam = useQueryParam('tab', 'my-teams');
  const [tabKey, setTabKey] = useState(tabParam);
  const myTeams = useSelector(state => state.list.team?.my || []);
  const joinedTeams = useSelector(state => state.list.team?.joined || []);
  const onCreateNewTeamModalOpen = () => dispatch(
    AppAction.toggle({
      key: 'createNewTeamModal',
      value: true,
    }),
  );
  const onSelect = key => {
    setTabKey(key);
    history.push(`/teams?tab=${key}`);
  };
  useEffect(() => setTabKey(tabParam), [tabParam]);
  useEffect(() => {
    'joined-teams' === tabKey && dispatch(TeamAction.listJoinedTeams());
    'my-teams' === tabKey && dispatch(TeamAction.listMyTeams());
  }, [dispatch, tabKey]);
  return (
    <div className="container w-1734 opens-my">
      <div className="row">
        <div className="col">
          <div className="profile-team">
            <div className="profile-team-head">
              <h5>
                {/* <img alt="teams" src={teamsIcon} /> Teams */}
                Teams
                <span className="float-right" onClick={onCreateNewTeamModalOpen}>+Create Team</span>
              </h5>
            </div>
            <Tab.Container activeKey={tabKey} onSelect={onSelect}>
              <div className="profile-team-tab">
                <Nav as="ul" className="nav-tabs">
                  <Nav.Item as="li">
                    <Nav.Link eventKey="my-teams">My Teams</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="joined-teams">Joined Teams</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="my-teams">
                    <TeamList data={myTeams} tab="my-teams" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="joined-teams">
                    <TeamList data={joinedTeams} tab="joined-teams" />
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

export default Teams;
