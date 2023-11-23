import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import PhoneInput from 'react-phone-input-2';
import { useDispatch, useSelector } from 'react-redux';

import fileUpload from '../../assets/img/FileUpload.png';
// import personalProfile1 from '../../assets/img/PersonalProfile1.png';

import AgreeCheckBox from '../../components/AgreeCheckBox';
import {
  AppAction,
  BetAction,
  ProfileAction,
} from '../../store/actions';
import StarRating from '../../../shared/components/StarRating';

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const authUser = useSelector(state => ({ ...state.auth.user }));
  const authUserProfile = { ...authUser.profile };
  const betRangeOptions = useSelector(state => state.list.betRangeOption?.all || []);
  const betPreferenceOptions = useSelector(state => state.list.betPreferenceOption?.all || []);
  const betFilterOptions = useSelector(state => state.list.betFilterOption?.all || []);
  const { errors, formKey, message } = useSelector(state => state.form.updateProfile || {});
  const [firstName, setFirstName] = useState(authUserProfile.first_name || '');
  const [lastName, setLastName] = useState(authUserProfile.last_name || '');
  const [username] = useState(authUser.username || '');
  const [birthDate] = useState(authUserProfile.birth_date || '');
  const [gender, setGender] = useState(authUserProfile.gender || '');
  const [phone] = useState(authUser.phone || '');
  const [isEditSecondaryPhone, setIsEditSecondaryPhone] = useState(!authUserProfile.secondary_phone);
  const [isShowSecondaryPhone, setIsShowSecondaryPhone] = useState(!!authUserProfile.secondary_phone);
  const [secondaryPhone, setSecondaryPhone] = useState(authUserProfile.secondary_phone || '');
  const [email] = useState(authUser.email || '');
  const [address, setAddress] = useState(authUserProfile.address || '');
  const [address2, setAddress2] = useState(authUserProfile.address2 || '');
  const [city, setCity] = useState(authUserProfile.city || '');
  const [state, setState] = useState(authUserProfile.state || '');
  const [zipCode, setZipCode] = useState(authUserProfile.zip_code || '');
  const [country, setCountry] = useState(authUserProfile.country || 'United States');
  const [photo, setPhoto] = useState(authUserProfile.photo || '');
  const [betRange, setBetRange] = useState(authUserProfile.bet_range || '');
  const [betPreferences, setBetPreferences] = useState(authUserProfile.bet_preferences || []);
  const [betFilter, setBetFilter] = useState(authUserProfile.bet_filter || '');
  const [acknowledgedAdult, setAcknowledgedAdult] = useState(false);
  const [agreedTermsAndConditions, setAgreedTermsAndConditions] = useState(false);
  const onReset = () => {
    setFirstName(authUserProfile.first_name || '');
    setLastName(authUserProfile.last_name || '');
    setGender(authUserProfile.gender || '');
    setIsEditSecondaryPhone(authUserProfile.secondary_phone === null);
    setIsShowSecondaryPhone(!!authUserProfile.secondary_phone);
    setSecondaryPhone(authUserProfile.secondary_phone || '');
    setAddress(authUserProfile.address || '');
    setAddress2(authUserProfile.address2 || '');
    setCity(authUserProfile.city || '');
    setState(authUserProfile.state || '');
    setZipCode(authUserProfile.zip_code || '');
    setCountry(authUserProfile.country || 'United States');
    setPhoto(authUserProfile.photo || '');
    setBetRange(authUserProfile.bet_range || '');
    setBetPreferences(authUserProfile.bet_preferences || []);
    setBetFilter(authUserProfile.bet_filter || '');
    setAcknowledgedAdult(false);
    setAgreedTermsAndConditions(false);
  };
  const onSubmit = event => {
    event.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      gender,
      address,
      address2,
      city,
      state,
      zip_code: zipCode,
      country,
      photo,
      bet_range: betRange,
      bet_preferences: betPreferences,
      bet_filter: betFilter,
    };
    if (isShowSecondaryPhone && isEditSecondaryPhone) {
      data.secondary_phone = secondaryPhone;
    }
    dispatch(ProfileAction.updateProfile(data));
  };
  const onProfilePhotoUpload = event => {
    dispatch(ProfileAction.uploadProfilePhoto({
      photo: event.target.files[0],
    }));
    event.target.value = '';
  };
  useEffect(() => {
    setPhoto(authUserProfile.photo);
  }, [authUserProfile.photo]);
  useEffect(() => {
    dispatch(BetAction.listBetRangeOptions());
    dispatch(BetAction.listBetPreferenceOptions());
    dispatch(BetAction.listBetFilterOptions());
  }, [dispatch]);
  useEffect(() => {
    if (errors === null) {
      dispatch(AppAction.toggle({
        key: 'alertModal',
        value: { formKey, message, redirectTo: '/profile' },
      }));
    }
  }, [dispatch, errors, formKey, message]);
  return (
    <div className="container w-1295 opens-my">
      <div className="dash-content">
        <div className="row">
          <div className="col">
            <div className="dash-content-head">
              {/* <h5><img src={personalProfile1} alt="" /> Personal Information Edit</h5> */}
              <h5> Personal Information Edit</h5>
            </div>
            <div className="dash-content-form">
              <div className="row">
                <div className="col">
                  <div className="dash-content-inner">
                    <h6>Fill up forms and edit where needed to update your Personal Information</h6>
                    <form className="custom-form" onSubmit={onSubmit}>
                      <div className="form-row">
                        <div className="form-group col-md">
                          <input
                            className={classNames('form-control', {
                              'is-invalid': errors?.first_name?.length,
                            })}
                            name="first_name"
                            onChange={event => setFirstName(event.target.value)}
                            placeholder="First Name *"
                            type="text"
                            value={firstName}
                          />
                          <div className="invalid-feedback">
                            {errors?.first_name?.join(' ')}
                          </div>
                        </div>
                        <div className="form-group col-md">
                          <input
                            className={classNames('form-control', {
                              'is-invalid': errors?.last_name?.length,
                            })}
                            name="last_name"
                            onChange={event => setLastName(event.target.value)}
                            placeholder="Last Name *"
                            type="text"
                            value={lastName}
                          />
                          <div className="invalid-feedback">
                            {errors?.last_name?.join(' ')}
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <div className="input-group">
                            <input
                              className="form-control"
                              placeholder="username_123"
                              readOnly
                              type="text"
                              value={username}
                            />
                            {/* todo: edit username
                            <div className="input-group-append">
                              <span className="input-group-text">Edit</span>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            className="form-control"
                            placeholder="Date of Birth"
                            readOnly
                            type="text"
                            value={birthDate && new Date(birthDate).toLocaleDateString('en-US')}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <div className="row">
                            <label className="col-sm-2 col-form-label">Gender</label>
                            <div className="col-sm-10">
                              <select
                                className={classNames('form-control', {
                                  'is-invalid': errors?.gender?.length,
                                })}
                                name="gender"
                                onChange={event => setGender(event.target.value)}
                                value={gender}
                              >
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                              <div className="invalid-feedback">
                                {errors?.gender?.join(' ')}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-sm-6">
                          <div className="input-group">
                            <input
                              className="form-control"
                              placeholder="Phone"
                              readOnly
                              type="text"
                              value={phone}
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-6">
                          {isShowSecondaryPhone ? (
                            <div className="input-group">
                              {isEditSecondaryPhone ? (<>
                                <PhoneInput
                                  className={classNames({
                                    'is-invalid': errors?.secondary_phone?.length,
                                  })}
                                  country="us"
                                  countryCodeEditable={false}
                                  enableSearch
                                  name="secondary_phone"
                                  onChange={setSecondaryPhone}
                                  placeholder="Secondary Phone"
                                  preferredCountries={['us']}
                                  value={secondaryPhone}
                                />
                                <div className="invalid-feedback">
                                  {errors?.secondary_phone?.join(' ')}
                                </div>
                              </>) : (
                                <input
                                  className="form-control"
                                  placeholder="Secondary Phone"
                                  readOnly
                                  type="text"
                                  value={secondaryPhone}
                                />
                              )}
                              {/* todo: edit secondary phone number
                              <div className="input-group-append">
                                <span className="input-group-text">Edit</span>
                              </div> */}
                            </div>
                          ) : (
                            <label className="col-form-label" onClick={() => setIsShowSecondaryPhone(true)}>
                              +Add Secondary Number
                            </label>
                          )}
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <div className="input-group">
                            <input
                              className="form-control"
                              placeholder="mail@email.com"
                              readOnly
                              type="email"
                              value={email}
                            />
                            {/* todo: edit email address
                            <div className="input-group-append">
                              <span className="input-group-text">Edit</span>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea
                          placeholder="Address 1 (Optional)"
                          className={classNames('form-control', {
                            'is-invalid': errors?.address?.length,
                          })}
                          name="address"
                          onChange={event => setAddress(event.target.value)}
                          rows="2"
                          value={address}
                        />
                        <div className="invalid-feedback">
                          {errors?.address?.join(' ')}
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea
                          className={classNames('form-control', {
                            'is-invalid': errors?.address2?.length,
                          })}
                          name="address2"
                          placeholder="Address 2 (Optional)"
                          onChange={event => setAddress2(event.target.value)}
                          rows="2"
                          value={address2}
                        />
                        <div className="invalid-feedback">
                          {errors?.address2?.join(' ')}
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md">
                          <input
                            className={classNames('form-control', {
                              'is-invalid': errors?.city?.length,
                            })}
                            name="city"
                            onChange={event => setCity(event.target.value)}
                            placeholder="City *"
                            type="text"
                            value={city}
                          />
                          <div className="invalid-feedback">
                            {errors?.city?.join(' ')}
                          </div>
                        </div>
                        <div className="form-group col-md">
                          <RegionDropdown
                            className={classNames('form-control', {
                              'is-invalid': errors?.state?.length,
                            })}
                            country={country}
                            defaultOptionLabel="State *"
                            name="state"
                            onChange={setState}
                            value={state}
                          />
                          <div className="invalid-feedback">
                            {errors?.state?.join(' ')}
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md">
                          <input
                            className={classNames('form-control', {
                              'is-invalid': errors?.zip_code?.length,
                            })}
                            name="zip_code"
                            onChange={event => setZipCode(event.target.value)}
                            placeholder="Zip Code *"
                            type="text"
                            value={zipCode}
                          />
                          <div className="invalid-feedback">
                            {errors?.zip_code?.join(' ')}
                          </div>
                        </div>
                        <div className="form-group col-md">
                          <CountryDropdown
                            className={classNames('form-control', {
                              'is-invalid': errors?.country?.length,
                            })}
                            defaultOptionLabel="Country *"
                            name="country"
                            onChange={setCountry}
                            priorityOptions={['US']}
                            value={country}
                          />
                          <div className="invalid-feedback">
                            {errors?.country?.join(' ')}
                          </div>
                        </div>
                      </div>
                      <div className="form-row profile-file-upload">
                        <div className="form-group col-md">
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="custom-file">
                                <input
                                  accept="image/jpeg, image/png"
                                  className="custom-file-input form-control"
                                  name="profile_photo"
                                  onChange={onProfilePhotoUpload}
                                  type="file"
                                />
                                <label className="custom-file-label">
                                  <img src={fileUpload} alt="" width="30px" />
                                  Upload Photo
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <label className="col-form-label">Upload Profile Picture</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md">
                          <label className="col-form-label cust-form-label">Max file size :2MB, File format: JPG/JPEG/PNG</label>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <select
                            className={classNames('form-control', {
                              'is-invalid': errors?.bet_range?.length,
                            })}
                            name="bet_range"
                            onChange={event => setBetRange(event.target.value)}
                            value={betRange}
                          >
                            <option value="">Betting Range</option>
                            {betRangeOptions.map((option, i) => (
                              <option key={i} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <div className="invalid-feedback">
                            {errors?.bet_range?.join(' ')}
                          </div>
                        </div>
                      </div>
                      <div className="betting-preferences">
                        <p>Betting Preferences</p>
                        <div className="row">
                          <div className="col-12 d-flex flex-wrap">
                            <div className="b-prefer-game">
                              <div className="form-group form-check b-prefer-check">
                                <input
                                  checked={betPreferences.includes('any')}
                                  className="form-check-input"
                                  id="bet-preference-any"
                                  name="bet_preferences"
                                  onChange={event => setBetPreferences(event.target.checked
                                    ? [...betPreferenceOptions.map(option => option.value), event.target.value]
                                    : [])}
                                  type="checkbox"
                                  value="any"
                                />
                                <label className="form-check-label" htmlFor="bet-preference-any">
                                  Any
                                </label>
                              </div>
                            </div>
                            {betPreferenceOptions.map((option, i) => (
                              <div className="b-prefer-game" key={i}>
                                <div className="form-group form-check b-prefer-check">
                                  <input
                                    checked={betPreferences.includes(option.value)}
                                    className="form-check-input"
                                    id={`bet-preference-${option.value}`}
                                    name="bet_preferences"
                                    onChange={event => {
                                      const { checked, value } = event.target;
                                      const values = [...betPreferences];
                                      if (checked) {
                                        values.push(value);
                                      } else {
                                        values.splice(values.indexOf(value), 1);
                                      }
                                      setBetPreferences([...values]);
                                    }}
                                    type="checkbox"
                                    value={option.value}
                                  />
                                  <label className="form-check-label" htmlFor={`bet-preference-${option.value}`}>
                                    {option.label}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="form-row suggested-filter">
                        <div className="col-12">
                          <label className="input-label mb-3">Betting Filters</label>
                        </div>
                        <div className="col-12">
                          <div className="row">
                            {betFilterOptions.map((option, i) => (
                              <div className="col-md-3 col-sm-6 form-group" key={i}>
                                <div className="form-check form-check-inline">
                                  <input
                                    checked={betFilter === String(option.value)}
                                    className="form-check-input"
                                    id={`bet-filter-${option.value}`}
                                    name="bet_filter"
                                    onChange={event => setBetFilter(event.target.value)}
                                    type="radio"
                                    value={String(option.value)}
                                  />
                                  <label className="form-check-label" htmlFor={`bet-filter-${option.value}`}>
                                    {isNaN(option.label)
                                      ? option.label
                                      : <StarRating styleType="4" value={option.label} />}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <AgreeCheckBox
                          checked={acknowledgedAdult}
                          label="I acknowledge that I am 19 years or older."
                          name="acknowledgeAdult"
                          onChange={setAcknowledgedAdult}
                        />
                      </div>
                      <div className="form-group">
                        <AgreeCheckBox
                          checked={agreedTermsAndConditions}
                          label="Agree with"
                          linkLabel="Terms &amp; Conditions"
                          linkTo="/terms-and-conditions"
                          message="Please select terms and conditions."
                          name="agreeTermsAndConditions"
                          onChange={setAgreedTermsAndConditions}
                        />
                      </div>
                      <div className="float-right profile-button mb-4">
                        <button type="button" className="btn btn-cancel" onClick={onReset}>
                          Reset
                        </button>
                        <button type="submit" className="btn save-button">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
