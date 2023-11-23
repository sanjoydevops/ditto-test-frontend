import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import styles from './InviteToTeamModal.module.scss';

import { AppAction, TeamAction, UserAction } from '../../../store/actions';

const InviteToTeamModal = () => {
  const dispatch = useDispatch();
  const team = useSelector(state => state.app.toggle.inviteToTeamModal);
  const users = useSelector(state => state.list.user?.all || []);
  const { errors, formKey, message } = useSelector(state => state.form.inviteToTeam || {});
  const showModal = !!team;
  const [username, setUsername] = useState('');
  const onClear = () => {
    setUsername('');
  };
  const onModalClose = () => dispatch(AppAction.toggle({
    key: 'inviteToTeamModal',
    value: false,
  }));
  const onSubmit = event => {
    event.preventDefault();
    dispatch(TeamAction.inviteToTeam(team.id, {
      username,
    }));
  };
  useEffect(() => {
    dispatch(UserAction.listAllUsers());
  }, [dispatch]);
  useEffect(() => {
    if (errors === null) {
      onClear();
      dispatch(AppAction.toggle({
        key: 'alertModal',
        value: { formKey, message },
      }));
    }
  }, [dispatch, errors, formKey, message]);
  return (
    <Modal centered className="custom-modal" show={showModal}>
      <button type="button" className="close" onClick={onModalClose}>
        X
      </button>
      <Modal.Body>
        <div className="team-modal">
          <h4>
            Send Invitation to Join the Team
          </h4>
          <form className="custom-form" onSubmit={onSubmit}>
            <div className="form-group">
              <input
                className={classNames('form-control', {
                  'is-invalid': errors?.username?.length,
                })}
                name="username"
                onChange={event => setUsername(event.target.value)}
                placeholder="Email Address or Phone Number or User Name"
                type="text"
                value={username}
              />
              <div className="invalid-feedback">
                {errors?.username?.join(' ')}
              </div>
            </div>
            <div className={classNames(styles.TeamInputLabel, 'modal-team-label')}>
              <label>
                e.g:
                <span> dummy@gmail.com </span>
                or
                <span> +11234567890</span>
              </label>
            </div>
            <div className="form-group">
              <select
                className="form-control"
                name="username"
                onChange={event => setUsername(event.target.value)}
                value={username}
              >
                <option value="">Username</option>
                {users.map(user => (
                  <option value={user.username}>{user.username}</option>
                ))}
              </select>
            </div>
            <div className="button">
              <button
                className="btn btn-modal-bet white"
                onClick={onClear}
                type="button"
              >
                Clear
              </button>
              <button
                className="btn btn-modal-bet green float-right"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default InviteToTeamModal;
