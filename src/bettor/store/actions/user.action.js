import { UserConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const listAllUsers = () =>
  request(UserConstant.LIST_ALL_USERS, {
    method: 'get',
    url: '/list-all-users',
  });

export const listConnectedUsers = () =>
  request(UserConstant.LIST_CONNECTED_USERS, {
    method: 'get',
    url: '/list-connected-users',
  });

export const listLeaderBoardUsers = () =>
  request(UserConstant.LIST_LEADER_BOARD_USERS, {
    method: 'get',
    url: '/list-leader-board-users',
  });

export const listMatchUsers = params =>
  request(UserConstant.LIST_MATCH_USERS, {
    method: 'get',
    params,
    url: '/list-match-users',
  });

export const listPeerUsers = () =>
  request(UserConstant.LIST_PEER_USERS, {
    method: 'get',
    url: '/list-peer-users',
  });

export const referUser = data =>
  request(UserConstant.REFER_USER, {
    data,
    form: true,
    method: 'post',
    url: '/refer-user',
  });
