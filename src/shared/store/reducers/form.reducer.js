import { SET_FORM, UNSET_FORM } from '../constants/app.constant';
import camelCase from '../../../utils/camelCase';

const FormReducer = (state = {}, action) => {
  const { payload: { data, errors, key: formKey = '', message } = {}, type } = action;
  const key = camelCase(formKey);
  switch (type) {
    case SET_FORM:
      return { ...state, [key]: { data, errors, formKey, message } };
    case UNSET_FORM:
      return { ...state, [key]: undefined };
    default:
      return state;
  }
};

export default FormReducer;
