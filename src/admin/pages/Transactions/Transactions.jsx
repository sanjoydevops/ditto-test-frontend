import formatISO from 'date-fns/formatISO';
import parseISO from 'date-fns/parseISO';
import React, { useCallback, useEffect, useMemo } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Pagination from '../../components/Pagination';
import TransactionsTable from '../../components/TransactionsTable';
import { TransactionAction } from '../../store/actions';
import useQueryParam from '../../../shared/hooks/useQueryParam';

const Transactions = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data: transactions, links } = useSelector(state => state.list.transaction?.all || {});
  const endDateValue = useQueryParam('end_date');
  const endDate = useMemo(() => endDateValue ? parseISO(endDateValue) : '', [endDateValue]);
  const page = useQueryParam('page');
  const keyword = useQueryParam('keyword', '');
  const startDateValue = useQueryParam('start_date');
  const startDate = useMemo(() => startDateValue ? parseISO(startDateValue) : '', [startDateValue]);
  const tab = useQueryParam('tab', 'all-transactions');
  const columns = [
    'all-transactions' === tab && true,
    ['created_datetime', 'full_name', 'email', 'phone', 'type', 'coin', 'amount', 'commission', 'total'],
  ].find(i => i);
  const historyReplace = params => history.replace({ search: '?' + new URLSearchParams({
    ...(params.endDate && { end_date: formatISO(params.endDate, { representation: 'date' }) }),
    ...(params.keyword && { keyword: params.keyword }),
    ...(params.page && { page: params.page }),
    ...(params.startDate && { start_date: formatISO(params.startDate, { representation: 'date' }) }),
    ...(params.tab && { tab: params.tab }),
  }).toString() });
  const listTransactions = useCallback(() => dispatch(TransactionAction.listAllTransactions({
    ...(endDate && { end_date: formatISO(endDate, { representation: 'date' }) }),
    ...(keyword && { keyword }),
    ...(page && { page }),
    ...(startDate && { start_date: formatISO(startDate, { representation: 'date' }) }),
    ...(tab && { tab }),
  })), [dispatch, endDate, keyword, page, startDate, tab]);
  useEffect(() => listTransactions(), [listTransactions]);
  return (
    <div className="row">
      <div className="col-12">
        <Tab.Container activeKey={tab} onSelect={value => historyReplace({ page: 1, tab: value })}>
          <Nav as="ul" className="nav-tabs">
            <Nav.Item as="li">
              <Nav.Link eventKey="all-transactions">All Transactions</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="profit-coin-purchase-transactions">Profit Coin Purchase History</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="fun-coin-purchase-transactions">Fun Coin Purchase History</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="profit-coin-sale-transactions">Withdraw History</Nav.Link>
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
                    onChange={([start, end]) => historyReplace({ endDate: end, keyword, page: 1, startDate: start, tab })}
                    placeholderText="From - To"
                    selected={startDate}
                    selectsRange
                    startDate={startDate}
                    style={{ maxWidth: '200px' }}
                  />
                  <input
                    className="form-control float-right"
                    name="keyword"
                    onChange={event => historyReplace({ endDate, keyword: event.target.value, page: 1, startDate, tab })}
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
                <Tab.Pane eventKey={tab}>
                  <TransactionsTable columns={columns} transactions={transactions} />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Transactions;
