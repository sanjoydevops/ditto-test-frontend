import formatISO from 'date-fns/formatISO';
import parseISO from 'date-fns/parseISO';
import React, { useCallback, useEffect, useMemo } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Pagination from '../../components/Pagination';
import ReferralsTable from '../../components/ReferralsTable';
import { ReferralAction } from '../../store/actions';
import useQueryParam from '../../../shared/hooks/useQueryParam';

const Referrals = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data: referrals, links } = useSelector(state => state.list.referral?.all || {});
  const endDateValue = useQueryParam('end_date');
  const endDate = useMemo(() => endDateValue ? parseISO(endDateValue) : '', [endDateValue]);
  const page = useQueryParam('page');
  const keyword = useQueryParam('keyword', '');
  const startDateValue = useQueryParam('start_date');
  const startDate = useMemo(() => startDateValue ? parseISO(startDateValue) : '', [startDateValue]);
  const historyReplace = params => history.replace({ search: '?' + new URLSearchParams({
    ...(params.endDate && { end_date: formatISO(params.endDate, { representation: 'date' }) }),
    ...(params.keyword && { keyword: params.keyword }),
    ...(params.page && { page: params.page }),
    ...(params.startDate && { start_date: formatISO(params.startDate, { representation: 'date' }) }),
  }).toString() });
  const listReferrals = useCallback(() => dispatch(ReferralAction.listAllReferrals({
    ...(endDate && { end_date: formatISO(endDate, { representation: 'date' }) }),
    ...(keyword && { keyword }),
    ...(page && { page }),
    ...(startDate && { start_date: formatISO(startDate, { representation: 'date' }) }),
  })), [dispatch, endDate, keyword, page, startDate]);
  useEffect(() => listReferrals(), [listReferrals]);
  return (
    <div className="row">
      <div className="col-12">
        <Tab.Container defaultActiveKey="all-referrals">
          <Nav as="ul" className="nav-tabs">
            <Nav.Item as="li">
              <Nav.Link eventKey="all-referrals">All Referrals</Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="card">
            <div className="card-header">
              <div className="d-flex align-items-center justify-content-between">
                <Pagination links={links} />
                <div className="input-group input-group-sm" style={{ width: '350px' }}>
                  <DatePicker
                    className="form-control form-control-sm"
                    endDate={endDate}
                    maxDate={new Date()}
                    name="date_range"
                    onChange={([start, end]) => historyReplace({ endDate: end, keyword, page: 1, startDate: start })}
                    placeholderText="From - To"
                    selected={startDate}
                    selectsRange
                    startDate={startDate}
                    style={{ maxWidth: '200px' }}
                  />
                  <input
                    className="form-control"
                    name="keyword"
                    onChange={event => historyReplace({ endDate, keyword: event.target.value, page: 1, startDate })}
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
                <Tab.Pane eventKey="all-referrals">
                  <ReferralsTable referrals={referrals} />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Referrals;
