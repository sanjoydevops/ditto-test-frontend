import { StatisticConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const fetchLoggedInUserStatisticData = () =>
  request(StatisticConstant.FETCH_LOGGED_IN_USER_STATISTIC_DATA, {
    method: 'get',
    url: '/fetch-logged-in-user-statistic-data',
  });
