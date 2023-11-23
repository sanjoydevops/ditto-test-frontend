import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import './Chat.scss';
import audioCallIcon from '../../assets/img/audiocallicon.svg';
import chatIconFinalBigger from '../../assets/img/Chat-Icon-Final-Bigger.svg';
import defaultProfilePhoto from '../../assets/img/default-profile-photo.png';
import dittoMarcNewCoinFinal from '../../assets/img/DittoMarc-new-coin-final.png';
import videoCallIcon from '../../assets/img/videocallicon.svg';

import ChatForm from '../../components/Chat/ChatForm';
import ChatMessage from '../../components/Chat/ChatMessage';
import ChatUser from '../../components/Chat/ChatUser';
import {
  AppAction,
  ChatAction,
  TeamAction,
  UserAction,
  WebSocketAction,
} from '../../store/actions';

const Chat = () => {
  const dispatch = useDispatch();
  const messagesRef = useRef(null);
  const { messageableId = 0, messageableType = 'user' } = useParams();
  const list = `${messageableType}.${messageableId}`;
  const authUser = useSelector(state => ({ ...state.auth.user }));
  const messages = useSelector(state => state.chat.messages?.[list] || []);
  const team = useSelector(state => state.chat.team);
  const user = useSelector(state => state.chat.user);
  const chatUsers = useSelector(state => state.chat.users?.[list] || []);
  const peerUsers = useSelector(state => state.list.user?.peer || []);
  const onPlaceBetModalOpen = () => dispatch(AppAction.toggle({
    key: 'placeBetModal',
    value: { team, type: [!!user && 1, !!team && 2, 3].find(i => i), user },
  }));
  useEffect(() => {
    dispatch(TeamAction.listAllTeams());
    dispatch(UserAction.listPeerUsers());
  }, [dispatch]);
  useEffect(() => {
    messagesRef.current.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: messagesRef.current.scrollHeight,
    });
  }, [messages.length]);
  useEffect(() => {
    const channelName = `${messageableType}.${'team' === messageableType ? messageableId : authUser.id}`;
    const eventName = 'chat-message';
    dispatch(ChatAction.viewChat(messageableType, messageableId));
    if (messageableId && messageableType) {
      dispatch(WebSocketAction.webSocketListen(channelName, eventName));
    }
    return () => {
      dispatch(ChatAction.stopViewingChat(messageableType, messageableId));
      dispatch(WebSocketAction.webSocketStopListening(channelName, eventName));
    };
  }, [authUser.id, dispatch, messageableId, messageableType]);
  return (
    <div className="container w-1734 opens-my">
      <div className="row">
        <div className="col-lg-3 col-md-5 mb-2">
          <div className="team-user-list">
            <div className="active-team-list">
              {chatUsers.map((user, i) => (
                <ChatUser key={i} user={user} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-7">
          <div className="view-chat-list">
            <div className="row">
              <div className="col">
                <div className="view-chat-head">
                  <div className="type">
                    <img alt="chat" src={chatIconFinalBigger} />
                  </div>
                  <div className="user">
                    {user && (
                      <div className="image">
                        <Link to={`/view-profile/${user.id}`}>
                          <img
                            alt="profile"
                            className="img-fluid"
                            src={user.profile.photo || defaultProfilePhoto}
                          />
                        </Link>
                      </div>
                    )}
                    <div className="name">
                      {team && team.name}
                      {user && user.username}
                    </div>
                  </div>
                  <div className="chat-call-icon">
                    <img alt="audio call" className="img-fluid" src={audioCallIcon} />
                    <img alt="video call" className="img-fluid" src={videoCallIcon} />
                  </div>
                </div>
                <div className="chart-view" ref={messagesRef}>
                  {messages.map((message, i) => (
                    <ChatMessage
                      left={Number(message.user_id) !== Number(authUser.id)}
                      key={i}
                      message={message}
                      right={Number(message.user_id) === Number(authUser.id)}
                    />
                  ))}
                </div>
                <div className="message-field">
                  <div className="image text-center">
                    <img
                      alt="place-bet"
                      className="img-fluid"
                      onClick={onPlaceBetModalOpen}
                      src={dittoMarcNewCoinFinal}
                    />
                  </div>
                  <ChatForm {...{ messageableId, messageableType }} />
                </div>
              </div>
            </div>
          </div>
          <div className="active-user-img">
            <h5 className="text-white">DittoPeers</h5>
            {peerUsers.slice(0, 5).map((user, i) => (
              <Link key={i} to={`/view-profile/${user.id}`}>
                <img alt="profile" src={user.profile?.photo || defaultProfilePhoto} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
