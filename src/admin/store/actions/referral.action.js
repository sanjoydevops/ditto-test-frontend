import { ReferralConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const listAllReferrals = params =>
  request(ReferralConstant.LIST_ALL_REFERRALS, {
    method: 'get',
    params,
    url: '/list-all-referrals',
  });
