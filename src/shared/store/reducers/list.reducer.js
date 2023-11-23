import { SET_LIST } from '../constants/app.constant';

const ListReducer = (state = {}, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_LIST:
      const { data, list, name } = payload;
      return { ...state, [name]: { ...state[name], [list]: data } };
    default:
      return state;
  }
};

export default ListReducer;
