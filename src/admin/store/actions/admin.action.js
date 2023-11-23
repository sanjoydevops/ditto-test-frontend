import { AdminConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const createAdmin = data =>
  request(AdminConstant.CREATE_ADMIN, {
    data,
    form: true,
    method: 'post',
    url: '/create-admin',
  });

export const listAllAdmins = params =>
  request(AdminConstant.LIST_ALL_ADMINS, {
    method: 'get',
    params,
    url: '/list-all-admins',
  });

export const removeAdmin = adminId =>
  request(AdminConstant.REMOVE_ADMIN, {
    method: 'delete',
    url: `/remove-admin/${adminId}`,
  });

export const toggleAccessAdmin = (adminId, data) =>
  request(AdminConstant.TOGGLE_ACCESS_ADMIN, {
    data,
    method: 'put',
    url: `/toggle-access-admin/${adminId}`,
  });

export const updateAdmin = (adminId, data) =>
  request(AdminConstant.UPDATE_ADMIN, {
    data,
    form: true,
    method: 'put',
    url: `/update-admin/${adminId}`,
  });

export const viewAdmin = adminId =>
  request(AdminConstant.VIEW_ADMIN, {
    method: 'get',
    url: `/view-admin/${adminId}`,
  });
