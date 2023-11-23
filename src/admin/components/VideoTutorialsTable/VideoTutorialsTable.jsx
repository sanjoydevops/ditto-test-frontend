import React, { Fragment } from 'react';
import classNames from 'classnames';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { VideoTutorialAction } from '../../store/actions';

const VideoTutorialsTable = ({ videoTutorials }) => {
  const dispatch = useDispatch();
  const authPermissions = useSelector(state => state.auth.permissions);
  const onRemove = videoTutorial => {
    if (window.confirm(`Do you want to remove "${videoTutorial?.title}"?`)) {
      dispatch(VideoTutorialAction.removeVideoTutorial(videoTutorial?.id));
    }
  };
  const onToggleVisibility = videoTutorial => {
    if (window.confirm(`Do you want to ${videoTutorial?.visibility ? 'hide' : 'show'} "${videoTutorial?.title}"?`)) {
      dispatch(VideoTutorialAction.toggleVisibilityVideoTutorial(videoTutorial?.id, {
        visibility: !videoTutorial?.visibility
      }));
    }
  };
  return (
    <table className="table table-head-fixed text-nowrap">
      <thead>
        <tr>
          <th>Action</th>
          {/* <th>ID</th> */}
          <th>Title</th>
          <th>Image</th>
          <th>Video</th>
          <th>Visibility</th>
        </tr>
      </thead>
      <tbody>
        {videoTutorials?.map?.((videoTutorial, i) => (
          <tr key={i}>
            <td className="p-2">
              <Dropdown as={ButtonGroup}>
                {authPermissions.includes('video-tutorial.view') && (
                  <Link className="btn btn-primary btn-sm" to={`/admin/video-tutorial-detail/${videoTutorial?.id}`}>
                    View
                  </Link>
                )}
                {authPermissions.some(p => ['video-tutorial.remove', 'video-tutorial.toggle-visibility'].includes(p)) && (
                  <Fragment>
                    <Dropdown.Toggle size="sm" variant="secondary">
                      More
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="p-2">
                      {authPermissions.includes('video-tutorial.edit') && (
                        <Link className="bg-info dropdown-item" to={`/admin/edit-video-tutorial/${videoTutorial?.id}`}>
                          Edit
                        </Link>
                      )}
                      <Dropdown.Divider />
                      {authPermissions.includes('video-tutorial.remove') && (
                        <Dropdown.Item className="bg-danger" onClick={() => onRemove(videoTutorial)}>
                          Remove
                        </Dropdown.Item>
                      )}
                      <Dropdown.Divider />
                      {authPermissions.includes('video-tutorial.toggle-visibility') && (
                        <Dropdown.Item className="bg-warning" onClick={() => onToggleVisibility(videoTutorial)}>
                          {videoTutorial?.visibility ? 'Hide' : 'Show' }
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Fragment>
                )}
              </Dropdown>
            </td>
            {/* <td>{videoTutorial?.id}</td> */}
            <td>{videoTutorial?.title}</td>
            <td>
              <img
                alt="Video Tutorial"
                height="25"
                src={videoTutorial?.image}
                witdh="25"
              />
            </td>
            <td>{videoTutorial?.video}</td>
            <td>
              <span className={classNames({ 'bg-warning': !videoTutorial?.visibility })}>
                {videoTutorial?.visibility ? 'Shown' : 'Hidden'}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VideoTutorialsTable;
