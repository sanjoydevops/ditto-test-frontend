import React, { Fragment } from 'react';
import classNames from 'classnames';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AboutUsAction } from '../../store/actions';

const AboutUsTable = ({ aboutUs }) => {
  const dispatch = useDispatch();
  const authPermissions = useSelector(state => state.auth.permissions);
  const onRemove = au => {
    if (window.confirm(`Do you want to remove "${au?.full_name}"?`)) {
      dispatch(AboutUsAction.removeAboutUs(au?.id));
    }
  };
  const onToggleVisibility = au => {
    if (window.confirm(`Do you want to ${au?.visibility ? 'hide' : 'show'} "${au?.full_name}"?`)) {
      dispatch(AboutUsAction.toggleVisibilityAboutUs(au?.id, {
        visibility: !au?.visibility
      }));
    }
  };
  return (
    <table className="table table-head-fixed text-nowrap">
      <thead>
        <tr>
          <th>Action</th>
          {/* <th>ID</th> */}
          <th>Full Name</th>
          <th>Description</th>
          <th>Photo</th>
          <th>Photo Alignment</th>
          <th>Visibility</th>
        </tr>
      </thead>
      <tbody>
        {aboutUs?.map?.((au, i) => (
          <tr key={i}>
            <td className="p-2">
              <Dropdown as={ButtonGroup}>
                {authPermissions.includes('about-us.view') && (
                  <Link className="btn btn-primary btn-sm" to={`/admin/about-us-detail/${au?.id}`}>
                    View
                  </Link>
                )}
                {authPermissions.some(p => ['about-us.remove', 'about-us.toggle-visibility'].includes(p)) && (
                  <Fragment>
                    <Dropdown.Toggle size="sm" variant="secondary">
                      More
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="p-2">
                      {authPermissions.includes('about-us.edit') && (
                        <Link className="bg-info dropdown-item" to={`/admin/edit-about-us/${au?.id}`}>
                          Edit
                        </Link>
                      )}
                      <Dropdown.Divider />
                      {authPermissions.includes('about-us.remove') && (
                        <Dropdown.Item className="bg-danger" onClick={() => onRemove(au)}>
                          Remove
                        </Dropdown.Item>
                      )}
                      <Dropdown.Divider />
                      {authPermissions.includes('about-us.toggle-visibility') && (
                        <Dropdown.Item className="bg-warning" onClick={() => onToggleVisibility(au)}>
                          {au?.visibility ? 'Hide' : 'Show' }
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Fragment>
                )}
              </Dropdown>
            </td>
            {/* <td>{au?.id}</td> */}
            <td>{au?.full_name}</td>
            <td>{au?.description}</td>
            <td>{au?.photo}</td>
            <td>{au?.photo_alignment}</td>
            <td>
              <span className={classNames({ 'bg-warning': !au?.visibility })}>
                {au?.visibility ? 'Shown' : 'Hidden'}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AboutUsTable;
