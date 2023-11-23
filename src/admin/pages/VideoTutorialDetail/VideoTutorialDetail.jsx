import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { VideoTutorialAction } from '../../store/actions';

const VideoTutorialDetail = () => {
  const dispatch = useDispatch();
  const { videoTutorialId } = useParams();
  const videoTutorial = useSelector(state => state.detail.videoTutorial);
  useEffect(() => {
    dispatch(VideoTutorialAction.viewVideoTutorial(videoTutorialId));
  }, [dispatch, videoTutorialId]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              Video Tutorial Detail
            </h3>
          </div>
          <div className="card-body">
            <dl className="mb-0">
              {/* <dt>ID</dt>
              <dd>{videoTutorial?.id}</dd> */}
              <dt>Title</dt>
              <dd>{videoTutorial?.title}</dd>
              <dt>Image</dt>
              <dd>
                <img
                  alt="Video Tutorial"
                  height="100"
                  src={videoTutorial?.image}
                  witdh="100"
                />
              </dd>
              <dt>Video</dt>
              <dd>{videoTutorial?.video}</dd>
              <dt>Visibility</dt>
              <dd>
                <span className={classNames({ 'bg-warning': !videoTutorial?.visibility })}>
                  {videoTutorial?.visibility ? 'Shown' : 'Hidden'}
                </span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorialDetail;
