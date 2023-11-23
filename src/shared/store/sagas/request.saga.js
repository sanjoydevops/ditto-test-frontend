import axios from 'axios';
import { call, put, select } from 'redux-saga/effects';

import * as FormAction from '../actions/form.action';
import * as RequestAction from '../actions/request.action';

function* request(basePath, action) {
  const { payload: { external, form, ...request }, subtype } = action;
  const { auth: { token } } = yield select();
  if (!external) {
    request.baseURL = `${process.env.REACT_APP_API_URL}${basePath}`;
  }
  request.headers = {
    'Accept': 'application/json',
    ...token && { 'Authorization': `Bearer ${token}` },
    ...request?.headers,
  };
  try {
    yield put(RequestAction.onRequest(subtype, request));
    const response = yield call(axios, request);
    const { data = {}, message = '' } = response.data;
    if (form) {
      yield put(FormAction.setForm(subtype, data, null, message));
    }
    yield put(RequestAction.onRequestSuccess(subtype, external ? response.data : data, message));
  } catch (error) {
    const { response = {} } = error;
    const { data = {}, error: exception = {}, errors = {}, message = '' } = response.data || {};
    if (form) {
      yield put(FormAction.setForm(subtype, null, errors, message));
    }
    yield put(RequestAction.onRequestError(subtype, external ? response.data : { ...data, errors, error: exception }, message));
  }
}

export default request;
