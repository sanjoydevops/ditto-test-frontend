import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AppAction, FormAction, VideoTutorialAction } from '../../store/actions';

const VideoTutorialForm = () => {
  const dispatch = useDispatch();
  const { videoTutorialId } = useParams();
  const { errors, formKey, message } = useSelector(state => state.form[videoTutorialId ? 'updateVideoTutorial' : 'createVideoTutorial'] || {});
  const imageUrl = useSelector(state => state.app.toggle?.videoTutorialImage);
  const videoTutorial = useSelector(state => videoTutorialId ? { ...state.detail.videoTutorial } : {});
  const [title, setTitle] = useState(videoTutorial.title || '');
  const [image, setImage] = useState(videoTutorial.image || '');
  const [video, setVideo] = useState(videoTutorial.video || '');
  const onClear = () => {
    setTitle('');
    setImage('');
    setVideo('');
  };
  const onReset = () => {
    setTitle(videoTutorial.title || '');
    setImage(videoTutorial.image || '');
    setVideo(videoTutorial.video || '');
  };
  const onSubmit = event => {
    event.preventDefault();
    const data = {
      title,
      image,
      video,
    };
    dispatch(
      videoTutorialId
        ? VideoTutorialAction.updateVideoTutorial(videoTutorialId, data)
        : VideoTutorialAction.createVideoTutorial(data)
    );
  };
  const onImageUpload = event => {
    dispatch(AppAction.uploadFile({
      file: event.target.files[0],
      key: 'videoTutorialImage',
    }));
    event.target.value = '';
  };
  useEffect(() => setImage(imageUrl), [imageUrl]);
  useEffect(() => videoTutorialId && dispatch(VideoTutorialAction.viewVideoTutorial(videoTutorialId)), [dispatch, videoTutorialId]);
  useEffect(() => {
    setTitle(videoTutorial.title || '');
    setImage(videoTutorial.image || '');
    setVideo(videoTutorial.video || '');
  }, [videoTutorial.title, videoTutorial.image, videoTutorial.video]);
  useEffect(() => {
    if (errors === null) {
      onClear();
      dispatch(FormAction.unsetForm(
        formKey,
      ));
    }
  }, [dispatch, errors, formKey, message]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card card-outline">
          <div className="card-header">
            <h3 className="card-title">
              {videoTutorialId ? 'Edit' : 'Create'} Video Tutorial
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  className={classNames('form-control', {
                    'is-invalid': errors?.title?.length,
                  })}
                  name="title"
                  onChange={event => setTitle(event.target.value)}
                  placeholder="Enter Title"
                  type="text"
                  value={title}
                />
                <div className="invalid-feedback">
                  {errors?.title?.join(' ')}
                </div>
              </div>
              <div className="form-group">
                <div className="custom-file">
                  <input
                    className={classNames('custom-file-input', {
                      'is-invalid': errors?.image?.length,
                    })}
                    id="image"
                    name="image"
                    onChange={onImageUpload}
                    type="file"
                  />
                  <label className="custom-file-label" htmlFor="image">
                    Choose
                  </label>
                  <div className="invalid-feedback">
                    {errors?.image?.join(' ')}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  className={classNames('form-control', {
                    'is-invalid': errors?.video?.length,
                  })}
                  name="video"
                  onChange={event => setVideo(event.target.value)}
                  placeholder="Enter Video"
                  type="text"
                  value={video}
                />
                <div className="invalid-feedback">
                  {errors?.video?.join(' ')}
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <button className="btn btn-block btn-warning" onClick={videoTutorialId ? onReset : onClear} type="button">
                    {videoTutorialId ? 'Reset' : 'Clear'}
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-primary btn-block" type="submit">
                    {videoTutorialId ? 'Update' : 'Create'} Video Tutorial
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorialForm;
