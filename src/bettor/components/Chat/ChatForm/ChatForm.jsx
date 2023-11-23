import { Picker as EmojiPicker } from 'emoji-mart';
import React, { useEffect, useState } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ChatForm.module.scss';
import fileUpload from '../../../assets/img/FileUpload.png';

import { AppAction, ChatAction, FormAction } from '../../../store/actions';

const ChatForm = ({ messageableId, messageableType }) => {
  const dispatch = useDispatch();
  const { errors, formKey, message: formMessage } = useSelector(state => state.form.sendChatMessage || {});
  const [message, setMessage] = useState('');
  const onChatDocumentUpload = event => {
    dispatch(AppAction.uploadFile({
      file: event.target.files[0],
      key: 'chatDocument',
      value: { messageableId, messageableType },
    }));
    event.target.value = '';
  };
  const onClear = () => {
    setMessage('');
  };
  const onSubmit = event => {
    event.preventDefault();
    dispatch(ChatAction.sendChatMessage(messageableType, messageableId, {
      message: { message },
    }));
  };
  useEffect(() => {
    if (errors === null) {
      onClear();
      dispatch(FormAction.unsetForm(
        formKey,
      ));
    }
  }, [dispatch, errors, formKey, formMessage]);
  return (
    <div className={styles.ChatForm}>
      <form className="chat-form" onSubmit={onSubmit}>
        <div className="chat-document">
          <div className="custom-file">
            <input
              className="custom-file-input form-control"
              name="chat_document"
              onChange={onChatDocumentUpload}
              type="file"
            />
            <label className="custom-file-label">
              <img alt="file" src={fileUpload} width="30px" />
              <br />
              <span className="d-none d-lg-block">
                File Upload
              </span>
            </label>
          </div>
        </div>
        <div className="chat-input">
          <textarea
            className="form-control"
            name="message"
            onChange={event => setMessage(event.target.value)}
            onKeyDown={event => event.key === 'Enter' && onSubmit(event)}
            placeholder="Write your message here"
            value={message}
          />
          <OverlayTrigger overlay={(
            <Popover id="emoji-popover">
              <EmojiPicker
                native
                onSelect={emoji => setMessage(value => `${value} ${emoji.native}`)}
                perLine={7}
                title="DittoMarc"
              />
            </Popover>
          )} rootClose trigger="click">
            <div className="chat-emoji">&#128512;</div>
          </OverlayTrigger>
        </div>
        <button className="btn chat-send" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
