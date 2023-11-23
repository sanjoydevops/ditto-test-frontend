import { TransactionConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const addTransaction = data =>
  request(TransactionConstant.ADD_TRANSACTION, {
    data,
    form: true,
    method: 'post',
    url: '/add-transaction',
  });

export const listAllTransactions = () =>
  request(TransactionConstant.LIST_ALL_TRANSACTIONS, {
    method: 'get',
    url: '/list-all-transactions',
  });
