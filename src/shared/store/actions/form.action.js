import { SET_FORM, UNSET_FORM } from '../constants/app.constant';

export const setForm = (key, data, errors, message) => ({
  payload: { data, errors, key, message },
  type: SET_FORM,
});

export const unsetForm = key => ({
  payload: { key },
  type: UNSET_FORM,
});
