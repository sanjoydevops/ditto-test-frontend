import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AboutUsAction, AppAction, FormAction } from '../../store/actions';

const AboutUsForm = () => {
  const dispatch = useDispatch();
  const { aboutUsId } = useParams();
  const { errors, formKey, message } = useSelector(state => state.form[aboutUsId ? 'updateAboutUs' : 'createAboutUs'] || {});
  const photoUrl = useSelector(state => state.app.toggle?.aboutUsPhoto);
  const aboutUs = useSelector(state => aboutUsId ? { ...state.detail.aboutUs } : {});
  const [fullName, setFullName] = useState(aboutUs.full_name || '');
  const [description, setDescription] = useState(aboutUs.description || '');
  const [photo, setPhoto] = useState(aboutUs.photo || '');
  const [photoAlignment, setPhotoAlignment] = useState(aboutUs.photo_alignment || '');
  const onClear = () => {
    setFullName('');
    setDescription('');
    setPhoto('');
    setPhotoAlignment('');
  };
  const onReset = () => {
    setFullName(aboutUs.full_name || '');
    setDescription(aboutUs.description || '');
    setPhoto(aboutUs.photo || '');
    setPhotoAlignment(aboutUs.photo_alignment || '');
  };
  const onSubmit = event => {
    event.preventDefault();
    const data = {
      full_name: fullName,
      description,
      photo,
      photo_alignment: photoAlignment,
    };
    dispatch(
      aboutUsId
        ? AboutUsAction.updateAboutUs(aboutUsId, data)
        : AboutUsAction.createAboutUs(data)
    );
  };
  const onImageUpload = event => {
    dispatch(AppAction.uploadFile({
      file: event.target.files[0],
      key: 'aboutUsPhoto',
    }));
    event.target.value = '';
  };
  useEffect(() => setPhoto(photoUrl), [photoUrl]);
  useEffect(() => aboutUsId && dispatch(AboutUsAction.viewAboutUs(aboutUsId)), [dispatch, aboutUsId]);
  useEffect(() => {
    setFullName(aboutUs.full_name || '');
    setDescription(aboutUs.description || '');
    setPhoto(aboutUs.photo || '');
    setPhotoAlignment(aboutUs.photo_alignment || '');
  }, [aboutUs.full_name, aboutUs.description, aboutUs.photo, aboutUs.photo_alignment]);
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
              {aboutUsId ? 'Edit' : 'Create'} About Us
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  className={classNames('form-control', {
                    'is-invalid': errors?.full_name?.length,
                  })}
                  name="full_name"
                  onChange={event => setFullName(event.target.value)}
                  placeholder="Enter Full Name"
                  type="text"
                  value={fullName}
                />
                <div className="invalid-feedback">
                  {errors?.full_name?.join(' ')}
                </div>
              </div>
              <div className="form-group">
                <textarea
                  className={classNames('form-control', {
                    'is-invalid': errors?.description?.length,
                  })}
                  name="description"
                  onChange={event => setDescription(event.target.value)}
                  placeholder="Enter Description"
                  value={description}
                />
                <div className="invalid-feedback">
                  {errors?.description?.join(' ')}
                </div>
              </div>
              <div className="form-group">
                <div className="custom-file">
                  <input
                    className={classNames('custom-file-input', {
                      'is-invalid': errors?.photo?.length,
                    })}
                    id="photo"
                    name="photo"
                    onChange={onImageUpload}
                    type="file"
                  />
                  <label className="custom-file-label" htmlFor="photo">
                    Choose
                  </label>
                  <div className="invalid-feedback">
                    {errors?.photo?.join(' ')}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <select
                  className={classNames('form-control', {
                    'is-invalid': errors?.photo_alignment?.length,
                  })}
                  name="photo_alignment"
                  onChange={event => setPhotoAlignment(event.target.value)}
                  value={photoAlignment}
                >
                  <option>Photo Alignment</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>
                <div className="invalid-feedback">
                  {errors?.photo_alignment?.join(' ')}
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <button className="btn btn-block btn-warning" onClick={aboutUsId ? onReset : onClear} type="button">
                    {aboutUsId ? 'Reset' : 'Clear'}
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-primary btn-block" type="submit">
                    {aboutUsId ? 'Update' : 'Create'} About Us
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

export default AboutUsForm;
