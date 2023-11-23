import { BetConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const acceptBet = betId =>
  request(BetConstant.ACCEPT_BET, {
    method: 'put',
    url: `/accept-bet/${betId}`,
  });

export const completeBet = (betId, data) =>
  request(BetConstant.COMPLETE_BET, {
    data,
    form: true,
    method: 'put',
    url: `/complete-bet/${betId}`,
  });

export const cancelBet = betId =>
  request(BetConstant.CANCEL_BET, {
    method: 'delete',
    url: `/cancel-bet/${betId}`,
  });

export const declineBet = betId =>
  request(BetConstant.DECLINE_BET, {
    method: 'delete',
    url: `/decline-bet/${betId}`,
  });

export const isBetInDispute = (betId, data) =>
  request(BetConstant.IS_BET_IN_DISPUTE, {
    data,
    method: 'post',
    url: `/is-bet-in-dispute/${betId}`,
  });

export const listActiveBets = () =>
  request(BetConstant.LIST_ACTIVE_BETS, {
    method: 'get',
    url: '/list-active-bets',
  });

  export const listBetFilterOptions = () =>
  request(BetConstant.LIST_BET_FILTER_OPTIONS, {
    method: 'get',
    url: '/list-bet-filter-options',
  });

export const listBetPreferenceOptions = () =>
  request(BetConstant.LIST_BET_PREFERENCE_OPTIONS, {
    method: 'get',
    url: '/list-bet-preference-options',
  });

export const listBetRangeOptions = () =>
  request(BetConstant.LIST_BET_RANGE_OPTIONS, {
    method: 'get',
    url: '/list-bet-range-options',
  });

export const listCompletedBets = () =>
  request(BetConstant.LIST_COMPLETED_BETS, {
    method: 'get',
    url: '/list-completed-bets',
  });

export const listInvitedBets = () =>
  request(BetConstant.LIST_INVITED_BETS, {
    method: 'get',
    url: '/list-invited-bets',
  });

export const listOfferBets = () =>
  request(BetConstant.LIST_OFFER_BETS, {
    method: 'get',
    url: '/list-offer-bets',
  });

export const listOpenBets = () =>
  request(BetConstant.LIST_OPEN_BETS, {
    method: 'get',
    url: '/list-open-bets',
  });

export const placeBet = data =>
  request(BetConstant.PLACE_BET, {
    data,
    form: true,
    method: 'post',
    url: '/place-bet',
  });

export const reviseBetResult = (betId, data) =>
  request(BetConstant.REVISE_BET_RESULT, {
    data,
    form: true,
    method: 'put',
    url: `/revise-bet-result/${betId}`,
  });
