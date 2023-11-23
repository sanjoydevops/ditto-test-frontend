import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useDispatch, useSelector } from 'react-redux';

import { FormAction, RestrictedLocationAction } from '../../store/actions';

const AddRestrictedLocation = () => {
  const dispatch = useDispatch();
  const { errors, formKey } = useSelector(state => state.form.addRestrictedLocation || {});
  const [country, setCountry] = useState('United States');
  const [state, setState] = useState('');
  const onClear = () => {
    setCountry('United States');
    setState('');
  };
  const onSubmit = event => {
    event.preventDefault();
    dispatch(RestrictedLocationAction.addRestrictedLocation({ country, state }));
  };
  useEffect(() => {
    if (errors === null) {
      onClear();
      dispatch(FormAction.unsetForm(
        formKey,
      ));
    }
  }, [dispatch, errors, formKey]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card card-outline">
          <div className="card-header">
            <h3 className="card-title">
              Add Restricted Location
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <CountryDropdown
                  className={classNames('form-control', {
                    'is-invalid': errors?.country?.length,
                  })}
                  defaultOptionLabel="Country"
                  name="country"
                  onChange={setCountry}
                  priorityOptions={['US']}
                  value={country}
                />
                <div className="invalid-feedback">
                  {errors?.country?.join(' ')}
                </div>
              </div>
              <div className="form-group">
                <RegionDropdown
                  className={classNames('form-control', {
                    'is-invalid': errors?.state?.length,
                  })}
                  country={country}
                  defaultOptionLabel="State"
                  name="state"
                  onChange={setState}
                  value={state}
                />
                <div className="invalid-feedback">
                  {errors?.state?.join(' ')}
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <button className="btn btn-block btn-warning" onClick={onClear} type="button">
                    Clear
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-block btn-primary" type="submit">
                    Add Restricted Location
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

export default AddRestrictedLocation;
