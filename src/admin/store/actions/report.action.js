import { ReportConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const fetchJoinedUserReport = () =>
  request(ReportConstant.FETCH_JOINED_USER_REPORT, {
    method: 'get',
    url: '/fetch-joined-user-report',
  });

export const fetchReferralReport = () =>
  request(ReportConstant.FETCH_REFERRAL_REPORT, {
    method: 'get',
    url: '/fetch-referral-report',
  });

export const fetchTopWinnerReport = () =>
  request(ReportConstant.FETCH_TOP_WINNER_REPORT, {
    method: 'get',
    url: '/fetch-top-winner-report',
  });
