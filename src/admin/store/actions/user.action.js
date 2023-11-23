import { UserConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const listAllUsers = params =>
  request(UserConstant.LIST_ALL_USERS, {
    method: 'get',
    params,
    url: '/list-all-users',
  });

export const toggleAccessUser = (userId, data) =>
  request(UserConstant.TOGGLE_ACCESS_USER, {
    data,
    method: 'put',
    url: `/toggle-access-user/${userId}`,
  });

export const viewUser = userId =>
  request(UserConstant.VIEW_USER, {
    method: 'get',
    url: `/view-user/${userId}`,
  });
