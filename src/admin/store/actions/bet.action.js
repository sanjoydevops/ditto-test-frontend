import { BetConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const approveBet = (betId, data) =>
  request(BetConstant.APPROVE_BET, {
    data,
    method: 'put',
    url: `/approve-bet/${betId}`,
  });

export const listAllBets = params =>
  request(BetConstant.LIST_ALL_BETS, {
    method: 'get',
    params,
    url: '/list-all-bets',
  });

export const settleDisputeBet = (betId, data) =>
  request(BetConstant.SETTLE_DISPUTE_BET, {
    data,
    method: 'put',
    url: `/settle-dispute-bet/${betId}`,
  });

export const viewBet = betId =>
  request(BetConstant.VIEW_BET, {
    method: 'get',
    url: `/view-bet/${betId}`,
  });
