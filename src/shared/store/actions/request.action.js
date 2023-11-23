import { REQUEST } from '../constants/app.constant';

export const request = (type, payload) => ({
  payload,
  subtype: type,
  type: REQUEST,
});

export const onRequest = (type, payload) => ({
  payload,
  type: `${type}_REQUEST`,
});

export const onRequestError = (type, payload, message) => ({
  message,
  payload,
  type: `${type}_ERROR`,
});

export const onRequestSuccess = (type, payload, message) => ({
  message,
  payload,
  type: `${type}_SUCCESS`,
});
