import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import styles from './RemoveTeamMemberModal.module.scss';

import { AppAction, TeamAction } from '../../../store/actions';

const RemoveTeamMemberModal = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.app.toggle.removeTeamMemberModal);
  const { errors, formKey, message } = useSelector(state => state.form.removeTeamMember || {});
  const { team, user } = data;
  const showModal = !!data;
  const onModalClose = () => dispatch(AppAction.toggle({
    key: 'removeTeamMemberModal',
    value: false,
  }));
  const onRemoveTeamMember = event => {
    event.preventDefault();
    dispatch(TeamAction.removeTeamMember(team.id, user.id));
    onModalClose();
  };
  useEffect(() => {
    if (errors === null) {
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
        <div className={styles.RemoveTeamMemberContainer}>
          <h4>Remove Team Member</h4>
          <div className={styles.RemoveTeamMemberContent}>
            <i className="far fa-trash-alt"></i>
            <p>Are you sure you want to remove team member?</p>
          </div>
          <div className="button">
            <button type="button" className="btn btn-modal-bet white" onClick={onModalClose}>
              No
            </button>
            <button type="button" className="btn btn-modal-bet green float-right" onClick={onRemoveTeamMember}>
              YES
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RemoveTeamMemberModal;
