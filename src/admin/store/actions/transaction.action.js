import { TransactionConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const listAllTransactions = params =>
  request(TransactionConstant.LIST_ALL_TRANSACTIONS, {
    method: 'get',
    params,
    url: '/list-all-transactions',
  });
