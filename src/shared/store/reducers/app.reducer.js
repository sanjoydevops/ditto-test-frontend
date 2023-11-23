import { TOGGLE } from '../constants/app.constant';

const AppReducer = (state = {}, action) => {
  const { payload, type } = action;
  switch (type) {
    case TOGGLE:
      const { key, value } = payload || {};
      return { ...state, toggle: { ...state.toggle, [key]: value } };
    default:
      return state;
  }
};

export default AppReducer;
