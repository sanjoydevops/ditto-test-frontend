import { put, takeEvery } from 'redux-saga/effects';

import { ListAction } from '../actions';
import { AppConstant } from '../constants';

function* AppSaga() {
  yield takeEvery(AppConstant.LIST_ALL_ABOUT_US_SUCCESS, listAllAboutUsSuccess);
  yield takeEvery(AppConstant.LIST_ALL_FREQUENTLY_ASKED_QUESTIONS_SUCCESS, listAllFrequentlyAskedQuestionsSuccess);
  yield takeEvery(AppConstant.LIST_ALL_COUNTRIES_SUCCESS, listAllCountriesSuccess);
  yield takeEvery(AppConstant.LIST_ALL_VIDEO_TUTORIALS_SUCCESS, listAllVideoTutorialsSuccess);
}

function* listAllAboutUsSuccess(action) {
  yield put(ListAction.setList('aboutUs', 'all', [...action?.payload?.aboutUs]));
}

function* listAllFrequentlyAskedQuestionsSuccess(action) {
  yield put(ListAction.setList('frequentlyAskedQuestion', 'all', [...action?.payload?.frequentlyAskedQuestions]));
}

function* listAllCountriesSuccess(action) {
  yield put(ListAction.setList('country', 'all', [...action?.payload?.map?.(({
    cca3, flag, flags, idd, name,
  }) => ({
    callingCode: (idd.root || '') + (idd.suffixes.length === 1 ? idd.suffixes[0] : ''),
    code: cca3,
    flag: flags.png,
    icon: flag,
    name: name.common,
  })).sort((a, b) => a.name.localeCompare(b.name))]));
}

function* listAllVideoTutorialsSuccess(action) {
  yield put(ListAction.setList('videoTutorial', 'all', [...action?.payload?.videoTutorials]));
}

export default AppSaga;
