import { ContactUsConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const listAllContactUs = params =>
  request(ContactUsConstant.LIST_ALL_CONTACT_US, {
    method: 'get',
    params,
    url: '/list-all-contact-us',
  });

export const viewContactUs = contactUsId =>
  request(ContactUsConstant.VIEW_CONTACT_US, {
    method: 'get',
    url: `/view-contact-us/${contactUsId}`,
  });
