import { AboutUsConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const createAboutUs = data =>
  request(AboutUsConstant.CREATE_ABOUT_US, {
    data,
    form: true,
    method: 'post',
    url: '/create-about-us',
  });

export const listAllAboutUs = params =>
  request(AboutUsConstant.LIST_ALL_ABOUT_US, {
    method: 'get',
    params,
    url: '/list-all-about-us',
  });

export const removeAboutUs = aboutUsId =>
  request(AboutUsConstant.REMOVE_ABOUT_US, {
    method: 'delete',
    url: `/remove-about-us/${aboutUsId}`,
  });

export const toggleVisibilityAboutUs = (aboutUsId, data) =>
  request(AboutUsConstant.TOGGLE_VISIBILITY_ABOUT_US, {
    data,
    method: 'put',
    url: `/toggle-visibility-about-us/${aboutUsId}`,
  });

export const updateAboutUs = (aboutUsId, data) =>
  request(AboutUsConstant.UPDATE_ABOUT_US, {
    data,
    form: true,
    method: 'put',
    url: `/update-about-us/${aboutUsId}`,
  });

export const viewAboutUs = aboutUsId =>
  request(AboutUsConstant.VIEW_ABOUT_US, {
    method: 'get',
    url: `/view-about-us/${aboutUsId}`,
  });
