import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import styles from './EditTeamModal.module.scss';
import defaultProfilePhoto from '../../../assets/img/default-profile-photo.png';

import { AppAction, TeamAction } from '../../../store/actions';
import BadgeImage from '../../../../shared/components/BadgeImage';
import StarRating from '../../../../shared/components/StarRating';

const EditTeamModal = () => {
  const dispatch = useDispatch();
  const team = useSelector(state => state.app.toggle.editTeamModal);
  const { errors, formKey, message } = useSelector(state => state.form.updateTeam || {});
  const showModal = !!team;
  const [name, setName] = useState(team?.name || '');
  const onClear = () => {
    setName('');
  };
  const onModalClose = () => dispatch(AppAction.toggle({
    key: 'editTeamModal',
    value: false,
  }));
  const onRemoveTeamMember = user => dispatch(AppAction.toggle({
    key: 'removeTeamMemberModal',
    value: { team, user },
  }));
  const onSubmit = event => {
    event.preventDefault();
    dispatch(TeamAction.updateTeam(team?.id, {
      name,
    }));
  };
  useEffect(() => {
    setName(team?.name || '');
  }, [team?.name]);
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
        <div className="team-modal">
          <h4>Edit Team Name</h4>
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
            <div className={classNames(styles.TeamInputLabel, 'modal-team-label')}>
              <label>e.g:<span> Avengers</span></label>
            </div>
            {team?.users?.length > 1 && (
              <div className={styles.TeamMembersContainer}>
                <h4>Remove Team Members</h4>
                <div className={styles.TeamMembersContent}>
                  {team?.users?.map?.((user, i) => team?.user?.id !== user?.id && (
                    <div className={classNames(styles.TeamMemberContainer, {
                      [styles.TeamMemberContainer__ActiveBetAccepted]: team?.active_bet?.users?.find?.(u => u?.id === user?.id)?.user_has_bet?.accepted_at,
                    })} key={i}>
                      <div className={styles.TeamMemberContent}>
                        <div className={styles.TeamMemberImage}>
                          <img
                            alt="profile"
                            src={user.profile.photo || defaultProfilePhoto}
                          />
                        </div>
                        <div className={styles.TeamMemberInfo}>
                          <div className={styles.TeamMemberName}>
                            <p>{user.username}</p>
                          </div>
                          <div className={styles.TeamMemberBadgeRating}>
                            {user.profile.badge_info && (
                              <span className={styles.TeamMemberBadge}>
                                <BadgeImage color="default" fluid value={user.profile.badge_info.value} />
                              </span>
                            )}
                            {user.profile.rating_value > 0 && (
                              <span className={styles.TeamMemberRating}>
                                <StarRating styleType="4" value={user.profile.rating_value} />
                              </span>
                            )}
                          </div>
                        </div>
                        <div className={styles.TeamMemberRemove}>
                          <button
                            className="btn btn-link"
                            onClick={() => onRemoveTeamMember(user)}
                            type="button"
                          >
                            <i className="far fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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

export default EditTeamModal;
