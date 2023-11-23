import React, { useCallback, useEffect } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Pagination from '../../components/Pagination';
import RestrictedLocationsTable from '../../components/RestrictedLocationsTable';
import { RestrictedLocationAction } from '../../store/actions';
import useQueryParam from '../../../shared/hooks/useQueryParam';

const RestrictedLocations = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data: restrictedLocations, links } = useSelector(state => state.list.restrictedLocation?.all || {});
  const page = useQueryParam('page');
  const keyword = useQueryParam('keyword', '');
  const historyReplace = params => history.replace({ search: '?' + new URLSearchParams({
    ...(params.keyword && { keyword: params.keyword }),
    ...(params.page && { page: params.page }),
  }).toString() });
  const listRestrictedLocations = useCallback(() => dispatch(RestrictedLocationAction.listAllRestrictedLocations({
    ...(keyword && { keyword }),
    ...(page && { page }),
  })), [dispatch, keyword, page]);
  useEffect(() => listRestrictedLocations(), [listRestrictedLocations]);
  return (
    <div className="row">
      <div className="col-12">
        <Tab.Container defaultActiveKey="all-restricted-locations">
          <Nav as="ul" className="nav-tabs">
            <Nav.Item as="li">
              <Nav.Link eventKey="all-restricted-locations">All Restricted Locations</Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="card">
            <div className="card-header">
              <div className="d-flex align-items-center justify-content-between">
                <Pagination links={links} />
                <div className="input-group input-group-sm" style={{ width: '150px' }}>
                  <input
                    className="form-control"
                    name="keyword"
                    onChange={event => historyReplace({ keyword: event.target.value, page: 1 })}
                    placeholder="Search..."
                    style={{ maxWidth: '150px' }}
                    type="text"
                    value={keyword}
                  />
                </div>
              </div>
            </div>
            <div className="card-body table-responsive p-0" style={{ height: '500px' }}>
              <Tab.Content>
                <Tab.Pane eventKey="all-restricted-locations">
                  <RestrictedLocationsTable restrictedLocations={restrictedLocations} />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};

export default RestrictedLocations;
