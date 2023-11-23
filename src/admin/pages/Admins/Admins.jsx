import React, { useEffect, useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import AdminsTable from '../../components/AdminsTable';
import Pagination from '../../components/Pagination';
import { AdminAction } from '../../store/actions';
import useQueryParam from '../../../shared/hooks/useQueryParam';

const Admins = () => {
  const dispatch = useDispatch();
  const { data: allAdmins, links } = useSelector(state => state.list.admin?.all || {});
  const [keyword, setKeyword] = useState('');
  const page = useQueryParam('page');
  const listAllAdmins = (keyword, page) => dispatch(AdminAction.listAllAdmins({ keyword, page }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => listAllAdmins(keyword, page), [dispatch, page]);
  return (
    <div className="row">
      <div className="col-12">
        <Tab.Container defaultActiveKey="all-admins">
          <Nav as="ul" className="nav-tabs">
            <Nav.Item as="li">
              <Nav.Link eventKey="all-admins">All Admins</Nav.Link>
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
                    onKeyDown={event => event.key === 'Enter' && listAllAdmins(keyword, 1)}
                    placeholder="Search..."
                    type="text"
                    value={keyword}
                  />
                </div>
              </div>
            </div>
            <div className="card-body table-responsive p-0" style={{ height: '500px' }}>
              <Tab.Content>
                <Tab.Pane eventKey="all-admins">
                  <AdminsTable admins={allAdmins} />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Admins;
