import {
  LIST_ALL_COUNTRIES,
  RESET_STORE,
  TOGGLE,
  UPLOAD_FILE,
} from '../constants/app.constant';
import { request } from '../../../shared/store/actions/request.action';
import buildFormData from '../../../utils/buildFormData';

export const listAllCountries = () =>
  request(LIST_ALL_COUNTRIES, {
    baseURL: 'https://restcountries.com/v3.1',
    external: true,
    method: 'get',
    params: { fields: 'cca3,flag,flags,idd,name' },
    url: '/all',
  });

export const resetStore = () => ({
  type: RESET_STORE,
});

export const toggle = payload => ({
  payload,
  type: TOGGLE,
});

export const uploadFile = data =>
  request(UPLOAD_FILE, {
    data: buildFormData(data),
    method: 'post',
    url: '/upload-file',
  });
