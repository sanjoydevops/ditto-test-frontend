import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { AppAction, TeamAction } from '../../../store/actions';

const CreateNewTeamModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.app.toggle.createNewTeamModal);
  const { errors, formKey, message } = useSelector(state => state.form.createTeam || {});
  const [name, setName] = useState('');
  const onClear = () => {
    setName('');
  };
  const onModalClose = () => dispatch(AppAction.toggle({
    key: 'createNewTeamModal',
    value: false,
  }));
  const onSubmit = event => {
    event.preventDefault();
    dispatch(TeamAction.createTeam({
      name,
    }));
  };
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
          <h4>Create New Team</h4>
          <form className="custom-form" onSubmit={onSubmit}>
            <div className="form-group">
              <input
                className={classNames('form-control', {
                  'is-invalid': errors?.name?.length,
                })}
                name="name"
                onChange={event => setName(event.target.value)}
                placeholder="Team Name"
                type="text"
                value={name}
              />
              <div className="invalid-feedback">
                {errors?.name?.join(' ')}
              </div>
            </div>
            <div className="modal-team-label">
              <label>e.g: <span> Cricket</span></label>
            </div>
            <div className="button">
              <button type="button" className="btn btn-modal-bet white" onClick={onClear}>
                Clear
              </button>
              <button type="submit" className="btn btn-modal-bet green float-right">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateNewTeamModal;
