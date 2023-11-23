import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { FormAction, RoleAction } from '../../store/actions';

const RoleForm = () => {
  const dispatch = useDispatch();
  const { roleId } = useParams();
  const { errors, formKey } = useSelector(state => state.form[roleId ? 'updateRole' : 'createRole'] || {});
  const allPermissions = useSelector(state => state.list.permission?.all || []);
  const role = useSelector(state => roleId ? { ...state.detail.role } : {});
  const [title, setTitle] = useState(role.title || '');
  const [description, setDescription] = useState(role.description || '');
  const [permissions, setPermissions] = useState(role.permissions?.map(permission => permission.name) || []);
  const onClear = () => {
    setTitle('');
    setDescription('');
    setPermissions([]);
  };
  const onReset = () => {
    setTitle(role.title || '');
    setDescription(role.description || '');
    setPermissions(role.permissions?.map(permission => permission.name) || []);
  };
  const onSubmit = event => {
    event.preventDefault();
    const data = {
      title,
      description,
      permissions: permissions.filter(permission => permission !== 'all'),
    };
    dispatch(
      roleId
        ? RoleAction.updateRole(roleId, data)
        : RoleAction.createRole(data)
    );
  };
  useEffect(() => dispatch(RoleAction.listAllPermissions()), [dispatch]);
  useEffect(() => roleId && dispatch(RoleAction.viewRole(roleId)), [dispatch, roleId]);
  useEffect(() => {
    setTitle(role.title || '');
    setDescription(role.description || '');
    setPermissions(role.permissions?.map(permission => permission.name) || []);
  }, [role.description, role.permissions, role.title]);
  useEffect(() => {
    if (errors === null) {
      onClear();
      dispatch(FormAction.unsetForm(
        formKey,
      ));
    }
  }, [dispatch, errors, formKey]);
  return (
    <div className="row role">
      <div className="col-12">
        <div className="card card-outline">
          <div className="card-header">
            <h3 className="card-title">
              {roleId ? 'Edit' : 'Create'} Role
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
                  placeholder="Enter Name"
                  type="text"
                  value={title}
                />
                <div className="invalid-feedback">
                  {errors?.title?.join?.(' ')?.replace?.('title', 'name')}
                </div>
              </div>
              <div className="form-group">
                <input
                  className={classNames('form-control', {
                    'is-invalid': errors?.description?.length,
                  })}
                  name="description"
                  onChange={event => setDescription(event.target.value)}
                  placeholder="Enter Description"
                  type="text"
                  value={description}
                />
                <div className="invalid-feedback">
                  {errors?.description?.join(' ')}
                </div>
              </div>
              <div className="form-group">
                <div className={classNames('form-row', {
                  'is-invalid': errors?.permissions?.length,
                })}>
                  <div className="col-4">
                    <div className="custom-control custom-switch">
                      <input
                        checked={permissions.includes('all')}
                        className="custom-control-input"
                        id={`permission-all`}
                        name="permissions"
                        onChange={event => setPermissions(event.target.checked
                          ? [...allPermissions.map(permission => permission.name), event.target.value]
                          : [])}
                        type="checkbox"
                        value="all"
                      />
                      <label className="custom-control-label" htmlFor="permission-all">
                        All
                      </label>
                    </div>
                  </div>
                  {allPermissions.map((permission, i) => (
                    <div className="col-4" key={i}>
                      <div className="custom-control custom-switch">
                        <input
                          checked={permissions.includes(permission.name)}
                          className="custom-control-input"
                          id={`permission-${permission.id}`}
                          name="permissions"
                          onChange={event => {
                            const { checked, value } = event.target;
                            const values = [...permissions];
                            if (checked) {
                              values.push(value);
                            } else {
                              values.splice(values.indexOf(value), 1);
                            }
                            setPermissions([...values]);
                          }}
                          type="checkbox"
                          value={permission.name}
                        />
                        <label className="custom-control-label" htmlFor={`permission-${permission.id}`}>
                          {permission.description}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="invalid-feedback">
                  {errors?.permissions?.join(' ')}
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <button className="btn btn-block btn-warning" onClick={roleId ? onReset : onClear} type="button">
                    {roleId ? 'Reset' : 'Clear'}
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-block btn-primary" type="submit">
                    {roleId ? 'Update' : 'Create'} Role
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

export default RoleForm;
