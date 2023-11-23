import { TeamConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const listAllTeams = params =>
  request(TeamConstant.LIST_ALL_TEAMS, {
    method: 'get',
    params,
    url: '/list-all-teams',
  });

export const viewTeam = teamId =>
  request(TeamConstant.VIEW_TEAM, {
    method: 'get',
    url: `/view-team/${teamId}`,
  });
