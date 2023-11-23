import React, { useEffect, useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '../../components/Pagination';
import TeamsTable from '../../components/TeamsTable';
import { TeamAction } from '../../store/actions';
import useQueryParam from '../../../shared/hooks/useQueryParam';

const Teams = () => {
  const dispatch = useDispatch();
  const { data: allTeams, links } = useSelector(state => state.list.team?.all || {});
  const [keyword, setKeyword] = useState('');
  const page = useQueryParam('page');
  const listAllTeams = (keyword, page) => dispatch(TeamAction.listAllTeams({ keyword, page }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => listAllTeams(keyword, page), [dispatch, page]);
  return (
    <div className="row">
      <div className="col-12">
        <Tab.Container defaultActiveKey="all-teams">
          <Nav as="ul" className="nav-tabs">
            <Nav.Item as="li">
              <Nav.Link eventKey="all-teams">All Teams</Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="card">
            <div className="card-header">
              <div className="d-flex align-items-center justify-content-between">
                <Pagination links={links} />
                <div className="input-group input-group-sm" style={{ width: '150px' }}>
                  <input
                    className="form-control float-right"
                    name="keyword"
                    onChange={event => setKeyword(event.target.value)}
                    onKeyDown={event => event.key === 'Enter' && listAllTeams(keyword, 1)}
                    placeholder="Search..."
                    type="text"
                    value={keyword}
                  />
                </div>
              </div>
            </div>
            <div className="card-body table-responsive p-0" style={{ height: '500px' }}>
              <Tab.Content>
                <Tab.Pane eventKey="all-teams">
                  <TeamsTable teams={allTeams} />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Teams;
