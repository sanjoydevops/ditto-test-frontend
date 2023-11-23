import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ChatUser.scss';
import defaultProfilePhoto from '../../../assets/img/default-profile-photo.png';

const ChatUser = ({ user }) => (
  <div className="ChatUser">
    <div className="image">
      <img
        alt="profile"
        className="img-fluid"
        src={user.profile?.photo || defaultProfilePhoto}
      />
    </div>
    <div className="name">
      {user.username}
    </div>
    <Dropdown>
      <Dropdown.Toggle variant="link">
        <i className="fas fa-ellipsis-v"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as="li">
          <Link to={`/chat/user/${user.id}`}>
            Chat
          </Link>
        </Dropdown.Item>
        <Dropdown.Item as="li">
          <Link to={`/view-profile/${user.id}`}>
            View Profile
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

export default ChatUser;
