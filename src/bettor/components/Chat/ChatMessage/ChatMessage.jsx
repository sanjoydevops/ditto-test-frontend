import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './ChatMessage.module.scss';
import defaultProfilePhoto from '../../../assets/img/default-profile-photo.png';

const prepareMessageType = ({ extension }) => [
  ['doc', 'docx', 'pdf', 'ppt', 'pptx', 'txt', 'xls', 'xlsx'].some(ext => extension === ext) && 'document',
  ['jpeg', 'jpg', 'png', 'svg', 'webp'].some(ext => extension === ext) && 'image',
  'text',
].find(i => i);

const prepareMessageFileType = ({ extension }) => [
  ['doc', 'docx'].some(ext => extension === ext) && 'file-word',
  ['jpeg', 'jpg', 'png', 'svg', 'webp'].some(ext => extension === ext) && 'file-image',
  ['pdf'].some(ext => extension === ext) && 'file-pdf',
  ['ppt', 'pptx'].some(ext => extension === ext) && 'file-powerpoint',
  ['txt'].some(ext => extension === ext) && 'file',
  ['xls', 'xlsx'].some(ext => extension === ext) && 'file-excel',
].find(i => i);

const ChatMessage = ({ left, right, message }) => {
  const [isLightBox, setIsLightBox] = useState(false);
  const msg = { ...message, ...message?.message, type: prepareMessageType({ ...message?.message }), file_type: prepareMessageFileType({ ...message?.message }) };
  return (
    <div className={styles.ChatMessage}>
      <div className={classNames({
        'chat-left': left,
        'chat-right': right,
      })}>
        <div className="chat-photo">
          <img
            alt="profile"
            className="img-fluid"
            src={msg?.user?.profile?.photo || defaultProfilePhoto}
          />
        </div>
        <div className="chat-message">
          {'document' === msg?.type && (
            <div className="chat-document">
              <p><i className={`fas fa-${msg?.file_type}`}></i> {msg?.name}</p>
              <hr />
              <a
                className="text-center"
                download={msg?.url}
                href={msg?.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="mb-0">Download</p>
              </a>
            </div>
          )}
          {'image' === msg?.type && (
            <div className={classNames('chat-image', { 'chat-image-lightbox': isLightBox })}>
              <img alt="message" className="img-fluid" src={msg?.url} />
              <div><hr /></div>
              <button className="btn btn-link p-0" onClick={() => setIsLightBox(!isLightBox)}>
                {isLightBox ? 'Close' : 'Open'}
              </button>
            </div>
          )}
          {'text' === msg?.type && (
            <span className="chat-text">{msg?.message}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
