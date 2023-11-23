import { ChartConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const fetchDisputeChartData = () =>
  request(ChartConstant.FETCH_DISPUTE_CHART_DATA, {
    method: 'get',
    url: '/fetch-dispute-chart-data',
  });

export const fetchJoinedUserChartData = () =>
  request(ChartConstant.FETCH_JOINED_USER_CHART_DATA, {
    method: 'get',
    url: '/fetch-joined-user-chart-data',
  });

export const fetchPlacedBetByDateChartData = () =>
  request(ChartConstant.FETCH_PLACED_BET_BY_DATE_CHART_DATA, {
    method: 'get',
    url: '/fetch-placed-bet-by-date-chart-data',
  });

export const fetchPlacedBetByTypeChartData = () =>
  request(ChartConstant.FETCH_PLACED_BET_BY_TYPE_CHART_DATA, {
    method: 'get',
    url: '/fetch-placed-bet-by-type-chart-data',
  });
