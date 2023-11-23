import { NotificationConstant } from '../constants';
import { request } from '../../../shared/store/actions/request.action';

export const listRecentNotifications = () =>
  request(NotificationConstant.LIST_RECENT_NOTIFICATIONS, {
    method: 'get',
    url: '/list-recent-notifications',
  });

export const readNotification = notificationId =>
  request(NotificationConstant.READ_NOTIFICATION, {
    method: 'put',
    url: `/read-notification/${notificationId}`,
  });
