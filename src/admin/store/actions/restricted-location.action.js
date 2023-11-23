import { RestrictedLocationConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const addRestrictedLocation = data =>
  request(RestrictedLocationConstant.ADD_RESTRICTED_LOCATION, {
    data,
    form: true,
    method: 'post',
    url: '/add-restricted-location',
  });

export const listAllRestrictedLocations = params =>
  request(RestrictedLocationConstant.LIST_ALL_RESTRICTED_LOCATIONS, {
    method: 'get',
    params,
    url: '/list-all-restricted-locations',
  });

export const removeRestrictedLocation = (restrictedLocationId) =>
  request(RestrictedLocationConstant.REMOVE_RESTRICTED_LOCATION, {
    method: 'delete',
    url: `/remove-restricted-location/${restrictedLocationId}`,
  });
