import { AppConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';
export * from '../../../shared/store/actions/app.action';

export const contactUs = data =>
  request(AppConstant.CONTACT_US, {
    data,
    form: true,
    method: 'post',
    url: '/contact-us',
  });

export const listAllAboutUs = () =>
  request(AppConstant.LIST_ALL_ABOUT_US, {
    method: 'get',
    url: '/list-all-about-us',
  });

export const listAllFrequentlyAskedQuestions = () =>
  request(AppConstant.LIST_ALL_FREQUENTLY_ASKED_QUESTIONS, {
    method: 'get',
    url: '/list-all-frequently-asked-questions',
  });

export const listAllVideoTutorials = () =>
  request(AppConstant.LIST_ALL_VIDEO_TUTORIALS, {
    method: 'get',
    url: '/list-all-video-tutorials',
  });
