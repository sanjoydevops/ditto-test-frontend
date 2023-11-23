import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AdminAction, FormAction, RoleAction } from '../../store/actions';

const AdminForm = () => {
  const dispatch = useDispatch();
  const { adminId } = useParams();
  const { errors, formKey, message } = useSelector(state => state.form[adminId ? 'updateAdmin' : 'createAdmin'] || {});
  const allRoles = useSelector(state => state.list.role?.all.data || []);
  const admin = useSelector(state => adminId ? { ...state.detail.admin } : {});
  const [name, setName] = useState(admin.name || '');
  const [email, setEmail] = useState(admin.email || '');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [roles, setRoles] = useState(admin.roles?.map(role => role.name) || []);
  const onClear = () => {
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
    setRoles([]);
  };
  const onReset = () => {
    setName(admin.name || '');
    setRoles(admin.roles?.map(role => role.name) || []);
  };
  const onSubmit = event => {
    event.preventDefault();
    const data = {
      name,
      roles,
      ...!adminId && {
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
    };
    dispatch(
      adminId
        ? AdminAction.updateAdmin(adminId, data)
        : AdminAction.createAdmin(data)
    );
  };
  useEffect(() => dispatch(RoleAction.listAllRoles()), [dispatch]);
  useEffect(() => adminId && dispatch(AdminAction.viewAdmin(adminId)), [dispatch, adminId]);
  useEffect(() => {
    setName(admin.name || '');
    setEmail(admin.email || '');
    setRoles(admin.roles?.map(role => role.name) || []);
  }, [admin.name, admin.email, admin.roles]);
  useEffect(() => {
    if (errors === null) {
      onClear();
      dispatch(FormAction.unsetForm(
        formKey,
      ));
    }
  }, [dispatch, errors, formKey, message]);
  return (
    <div className="row admin">
      <div className="col-12">
        <div className="card card-outline">
          <div className="card-header">
            <h3 className="card-title">
              {adminId ? 'Edit' : 'Create'} Admin
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  className={classNames('form-control', {
                    'is-invalid': errors?.name?.length,
                  })}
                  name="name"
                  onChange={event => setName(event.target.value)}
                  placeholder="Enter Name"
                  type="text"
                  value={name}
                />
                <div className="invalid-feedback">
                  {errors?.name?.join(' ')}
                </div>
              </div>
              <div className="form-group">
                <input
                  className={classNames('form-control', {
                    'is-invalid': errors?.email?.length,
                  })}
                  name="email"
                  onChange={event => setEmail(event.target.value)}
                  placeholder="Enter Email"
                  readOnly={!!adminId}
                  type="text"
                  value={email}
                />
                <div className="invalid-feedback">
                  {errors?.email?.join(' ')}
                </div>
              </div>
              {!adminId && (
                <div className="form-group">
                  <input
                    className={classNames('form-control', {
                      'is-invalid': errors?.password?.length,
                    })}
                    name="password"
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Enter Password"
                    type="password"
                    value={password}
                  />
                  <div className="invalid-feedback">
                    {errors?.password?.join(' ')}
                  </div>
                </div>
              )}
              {!adminId && (
                <div className="form-group">
                  <input
                    className={classNames('form-control', {
                      'is-invalid': errors?.password_confirmation?.length,
                    })}
                    name="password_confirmation"
                    onChange={event => setPasswordConfirmation(event.target.value)}
                    placeholder="Confirm Password"
                    type="password"
                    value={passwordConfirmation}
                  />
                  <div className="invalid-feedback">
                    {errors?.password_confirmation?.join(' ')}
                  </div>
                </div>
              )}
              {allRoles.length > 0 && (
                <div className="form-group">
                  <select
                    className={classNames('custom-select', {
                      'is-invalid': errors?.roles?.length,
                    })}
                    multiple
                    name="roles"
                    onChange={event => setRoles(Array.from(
                      event.target.selectedOptions,
                      option => option.value,
                    ))}
                    value={roles}
                  >
                    {allRoles.map((role, i) => (
                      <option key={i} value={role.name}>
                        {role.title}
                      </option>
                    ))}
                  </select>
                  <div className="invalid-feedback">
                    {errors?.roles?.join(' ')}
                  </div>
                </div>
              )}
              <div className="row">
                <div className="col-6">
                  <button className="btn btn-block btn-warning" onClick={adminId ? onReset : onClear} type="button">
                    {adminId ? 'Reset' : 'Clear'}
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-block btn-primary" type="submit">
                    {adminId ? 'Update' : 'Create'} Admin
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

export default AdminForm;
