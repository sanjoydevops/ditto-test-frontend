import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ViewJoinedBetMembersModal.module.scss';
import defaultProfilePhoto from '../../../assets/img/default-profile-photo.png';

import { AppAction } from '../../../store/actions';
import BadgeImage from '../../../../shared/components/BadgeImage';
import StarRating from '../../../../shared/components/StarRating';

const ViewJoinedBetMembersModal = () => {
  const dispatch = useDispatch();
  const authUserId = useSelector(state => state.auth.user.id);
  const bet = useSelector(state => state.app.toggle.viewJoinedBetMembersModal);
  const showModal = !!bet;
  const onModalClose = () => dispatch(AppAction.toggle({
    key: 'viewJoinedBetMembersModal',
    value: false,
  }));
  return (
    <Modal centered className="custom-modal" show={showModal}>
      <button type="button" className="close" onClick={onModalClose}>
        X
      </button>
      <Modal.Body>
        <div className={styles.TeamMembersContainer}>
          <div className="team-modal">
            <h4>Joined Members</h4>
            {bet?.users?.length > 1 && (
              <div className={styles.TeamMembersContent}>
                {bet?.users?.map?.((user, i) => (authUserId !== user?.id && user?.user_has_bet?.accepted_at) && (
                  <div className={styles.TeamMemberContainer} key={i}>
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
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ViewJoinedBetMembersModal;
