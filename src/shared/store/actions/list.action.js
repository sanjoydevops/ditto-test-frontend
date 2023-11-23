import { SET_LIST } from '../constants/app.constant';
import addToList from '../../../utils/addToList';
import removeFromList from '../../../utils/removeFromList';
import updateToList from '../../../utils/updateToList';

export const setList = (name, list, data, task, action, state) => {
  let taskAction;
  if (typeof task === 'object') {
    taskAction = task.action;
    task = task.name;
  }
  const fn = [
    'add' === task && addToList,
    'remove' === task && removeFromList,
    'update' === task && updateToList,
  ].find(f => f);
  if (fn) {
    data = fn.apply(null, [action, state, name, list, taskAction]);
  }
  return {
    payload: { data, list, name },
    type: SET_LIST,
  };
};
