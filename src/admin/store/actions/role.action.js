import { RoleConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const createRole = data =>
  request(RoleConstant.CREATE_ROLE, {
    data,
    form: true,
    method: 'post',
    url: '/create-role',
  });

export const listAllPermissions = () =>
  request(RoleConstant.LIST_ALL_PERMISSIONS, {
    method: 'get',
    url: '/list-all-permissions',
  });

export const listAllRoles = params =>
  request(RoleConstant.LIST_ALL_ROLES, {
    method: 'get',
    params,
    url: '/list-all-roles',
  });

export const removeRole = roleId =>
  request(RoleConstant.REMOVE_ROLE, {
    method: 'delete',
    url: `/remove-role/${roleId}`,
  });

export const updateRole = (roleId, data) =>
  request(RoleConstant.UPDATE_ROLE, {
    data,
    form: true,
    method: 'put',
    url: `/update-role/${roleId}`,
  });

export const viewRole = roleId =>
  request(RoleConstant.VIEW_ROLE, {
    method: 'get',
    url: `/view-role/${roleId}`,
  });
