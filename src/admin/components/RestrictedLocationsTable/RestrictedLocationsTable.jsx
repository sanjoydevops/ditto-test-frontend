import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RestrictedLocationAction } from '../../store/actions';

const RestrictedLocationsTable = ({ restrictedLocations }) => {
  const dispatch = useDispatch();
  const authPermissions = useSelector(state => state.auth.permissions);
  const onRemove = restrictedLocation => {
    if (window.confirm(`Do you want to remove "${restrictedLocation?.state} (${restrictedLocation?.country})"?`)) {
      dispatch(RestrictedLocationAction.removeRestrictedLocation(restrictedLocation?.id));
    }
  };
  return (
    <table className="table table-bordered table-head-fixed text-nowrap">
      <thead>
        <tr>
          <th>Action</th>
          {/* <th>ID</th> */}
          <th>Added At</th>
          <th>Country</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        {restrictedLocations?.map?.((restrictedLocation, i) => (
          <tr key={i}>
            <td className="p-2">
              {authPermissions.includes('restricted-location.remove') && (
                <button className="btn btn-danger btn-sm" onClick={() => onRemove(restrictedLocation)}>
                  Remove
                </button>
              )}
            </td>
            {/* <td>{restrictedLocation?.id}</td> */}
            <td>{restrictedLocation.created_date} {restrictedLocation.created_time}</td>
            <td>{restrictedLocation?.country}</td>
            <td>{restrictedLocation?.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RestrictedLocationsTable;
