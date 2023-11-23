import { VideoTutorialConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const createVideoTutorial = data =>
  request(VideoTutorialConstant.CREATE_VIDEO_TUTORIAL, {
    data,
    form: true,
    method: 'post',
    url: '/create-video-tutorial',
  });

export const listAllVideoTutorials = params =>
  request(VideoTutorialConstant.LIST_ALL_VIDEO_TUTORIALS, {
    method: 'get',
    params,
    url: '/list-all-video-tutorials',
  });

export const removeVideoTutorial = videoTutorialId =>
  request(VideoTutorialConstant.REMOVE_VIDEO_TUTORIAL, {
    method: 'delete',
    url: `/remove-video-tutorial/${videoTutorialId}`,
  });

export const toggleVisibilityVideoTutorial = (videoTutorialId, data) =>
  request(VideoTutorialConstant.TOGGLE_VISIBILITY_VIDEO_TUTORIAL, {
    data,
    method: 'put',
    url: `/toggle-visibility-video-tutorial/${videoTutorialId}`,
  });

export const updateVideoTutorial = (videoTutorialId, data) =>
  request(VideoTutorialConstant.UPDATE_VIDEO_TUTORIAL, {
    data,
    form: true,
    method: 'put',
    url: `/update-video-tutorial/${videoTutorialId}`,
  });

export const viewVideoTutorial = videoTutorialId =>
  request(VideoTutorialConstant.VIEW_VIDEO_TUTORIAL, {
    method: 'get',
    url: `/view-video-tutorial/${videoTutorialId}`,
  });
