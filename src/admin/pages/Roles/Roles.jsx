import React, { useEffect, useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '../../components/Pagination';
import RolesTable from '../../components/RolesTable';
import { RoleAction } from '../../store/actions';
import useQueryParam from '../../../shared/hooks/useQueryParam';

const Roles = () => {
  const dispatch = useDispatch();
  const { data: allRoles, links } = useSelector(state => state.list.role?.all || {});
  const [keyword, setKeyword] = useState('');
  const page = useQueryParam('page');
  const listAllRoles = (keyword, page) => dispatch(RoleAction.listAllRoles({ keyword, page }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => listAllRoles(keyword, page), [dispatch, page]);
  return (
    <div className="row">
      <div className="col-12">
        <Tab.Container defaultActiveKey="all-roles">
          <Nav as="ul" className="nav-tabs">
            <Nav.Item as="li">
              <Nav.Link eventKey="all-roles">All Roles</Nav.Link>
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
                    onKeyDown={event => event.key === 'Enter' && listAllRoles(keyword, 1)}
                    placeholder="Search..."
                    type="text"
                    value={keyword}
                  />
                </div>
              </div>
            </div>
            <div className="card-body table-responsive p-0" style={{ height: '500px' }}>
              <Tab.Content>
                <Tab.Pane eventKey="all-roles">
                  <RolesTable roles={allRoles} />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Roles;
