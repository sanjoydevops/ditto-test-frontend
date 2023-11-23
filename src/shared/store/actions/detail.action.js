import { SET_DETAIL } from '../constants/app.constant';

export const setDetail = (name, data) => ({
  payload: { data, name },
  type: SET_DETAIL,
});
