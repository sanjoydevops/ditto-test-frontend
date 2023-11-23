import { TeamConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const createTeam = data =>
  request(TeamConstant.CREATE_TEAM, {
    data,
    form: true,
    method: 'post',
    url: '/create-team',
  });

export const inviteToTeam = (teamId, data) =>
  request(TeamConstant.INVITE_TO_TEAM, {
    data,
    form: true,
    method: 'post',
    url: `/invite-to-team/${teamId}`,
  });

export const joinTeam = teamId =>
  request(TeamConstant.JOIN_TEAM, {
    method: 'post',
    url: `/join-team/${teamId}`,
  });

export const leaveTeam = teamId =>
  request(TeamConstant.LEAVE_TEAM, {
    method: 'delete',
    url: `/leave-team/${teamId}`,
  });

export const listAllTeams = () =>
  request(TeamConstant.LIST_ALL_TEAMS, {
    method: 'get',
    url: `/list-all-teams`,
  });

export const listJoinedTeams = () =>
  request(TeamConstant.LIST_JOINED_TEAMS, {
    method: 'get',
    url: '/list-joined-teams',
  });

export const listMyTeams = () =>
  request(TeamConstant.LIST_MY_TEAMS, {
    method: 'get',
    url: '/list-my-teams',
  });

export const removeTeamMember = (teamId, userId) =>
  request(TeamConstant.REMOVE_TEAM_MEMBER, {
    method: 'delete',
    url: `/remove-team-member/${teamId}/${userId}`,
  });

export const toggleTeamAccess = (teamId, data) =>
  request(TeamConstant.TOGGLE_TEAM_ACCESS, {
    data,
    method: 'put',
    url: `/toggle-team-access/${teamId}`,
  });

export const updateTeam = (teamId, data) =>
  request(TeamConstant.UPDATE_TEAM, {
    data,
    form: true,
    method: 'put',
    url: `/update-team/${teamId}`,
  });

export const viewTeam = teamId =>
  request(TeamConstant.VIEW_TEAM, {
    method: 'get',
    url: `/view-team/${teamId}`,
  });
