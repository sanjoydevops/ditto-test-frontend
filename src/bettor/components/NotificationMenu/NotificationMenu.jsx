import React, { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './NotificationMenu.module.scss';
import defaultProfilePhoto from '../../assets/img/default-profile-photo.png';

import { NotificationAction } from '../../store/actions';

const prepareNotificationUrl = notification => [
  'bet' === notification.notifiable_type && '/bets?tab=invited-bets',
  'message' === notification.notifiable_type && [
    'team' === notification.notifiable.messageable_type && `/chat/team/${notification.notifiable.messageable_id}`,
    'user' === notification.notifiable.messageable_type && `/chat/user/${notification.notifiable.user_id}`,
  ].find(j => j),
  'team' === notification.notifiable_type && `/join-team/${notification.notifiable_id}`,
  '/',
].find(j => j);

const NotificationContent = ({ notifications }) => notifications.length > 0 && (
  <div className="notification-content">
    <div className="notification-time">
      <span>Recent</span>
    </div>
    <ul className="notification-list">
      {notifications.map((notification, i) => (
        <Dropdown.Item as="li" bsPrefix className="notification-list-item" key={i}>
          <div className="notification-image">
            <img
              alt="notification"
              className="img-fluid"
              src={notification.notifiable?.user?.profile?.photo || defaultProfilePhoto}
            />
          </div>
          <div className="notification-text">
            <Link
              className="notification-link"
              onClick={() => !notification.read_at && notification.markAsRead()}
              to={notification.url}
            >
              {notification.message}
            </Link>
          </div>
          <div className="notification-action">
            {notification.read_at ? (
              <i className="fas fa-envelope-open"></i>
            ) : (
              <i className="fas fa-envelope"></i>
            )}
          </div>
        </Dropdown.Item>
      ))}
    </ul>
  </div>
);

const NotificationMenu = () => {
  const dispatch = useDispatch();
  const recentNotifications = useSelector(state => state.list.notification?.recent?.map?.(notification => ({
    ...notification, url: prepareNotificationUrl(notification), markAsRead: () => dispatch(NotificationAction.readNotification(notification.id)),
  })) || []);
  const yesterdayNotifications = useSelector(state => state.list.notification?.yesterday?.map?.(notification => ({
    ...notification, url: prepareNotificationUrl(notification), markAsRead: () => dispatch(NotificationAction.readNotification(notification.id)),
  })) || []);
  const unReadNotifications = recentNotifications.filter(notification => !notification.read_at).concat(yesterdayNotifications.filter(notification => !notification.read_at));
  useEffect(() => dispatch(NotificationAction.listRecentNotifications()), [dispatch]);
  return (
    <Dropdown as="li" className={styles.NotificationMenu} drop="down">
      <Dropdown.Toggle as="a" className="dropdown-toggle nav-link notification-bell" data-notification-count={unReadNotifications.length} id="notification-dropdown">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="29.646" height="33.934" viewBox="0 0 29.646 33.934">
          <defs>
            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#cfcfcf" />
            </linearGradient>
          </defs>
          <g id="Icon_feather-bell" data-name="Icon feather-bell" transform="translate(-4.5 -3)">
            <path id="Path_1048" data-name="Path 1048" d="M29.2,12.882a9.882,9.882,0,1,0-19.764,0C9.441,24.411,4.5,27.7,4.5,27.7H34.146S29.2,24.411,29.2,12.882" transform="translate(0)" fill="url(#linear-gradient)" />
            <path id="Path_1049" data-name="Path 1049" d="M21.1,31.5a3.294,3.294,0,0,1-5.7,0" transform="translate(1.069 2.793)" fill="none" stroke="#118d3f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </Dropdown.Toggle>
      <Dropdown.Menu as="div" className="notification-dropdown">
        <div className="notification-header">
          Notification
        </div>
        <NotificationContent notifications={recentNotifications} />
        <NotificationContent notifications={yesterdayNotifications} />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationMenu;
