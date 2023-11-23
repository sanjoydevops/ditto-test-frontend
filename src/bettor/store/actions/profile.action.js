import { ProfileConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';
import buildFormData from '../../../utils/buildFormData';

export const toggleProfileNotification = data =>
  request(ProfileConstant.TOGGLE_PROFILE_NOTIFICATION, {
    data,
    method: 'put',
    url: '/toggle-profile-notification',
  });

export const updateProfile = data =>
  request(ProfileConstant.UPDATE_PROFILE, {
    data,
    form: true,
    method: 'put',
    url: '/update-profile',
  });

export const uploadProfileCover = data =>
  request(ProfileConstant.UPLOAD_PROFILE_COVER, {
    data: buildFormData(data),
    method: 'post',
    url: '/upload-profile-cover',
  });

export const uploadProfilePhoto = data =>
  request(ProfileConstant.UPLOAD_PROFILE_PHOTO, {
    data: buildFormData(data),
    method: 'post',
    url: '/upload-profile-photo',
  });

export const viewProfile = userId =>
  request(ProfileConstant.VIEW_PROFILE, {
    method: 'get',
    url: `/view-profile/${userId}`,
  });
