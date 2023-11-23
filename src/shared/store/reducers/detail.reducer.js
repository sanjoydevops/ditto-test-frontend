import { SET_DETAIL } from '../constants/app.constant';

const DetailReducer = (state = {}, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_DETAIL:
      const { data, name } = payload;
      return { ...state, [name]: data };
    default:
      return state;
  }
};

export default DetailReducer;
