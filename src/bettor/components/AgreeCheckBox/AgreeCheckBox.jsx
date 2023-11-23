import React from 'react';
import { Link } from 'react-router-dom';

const AgreeCheckBox = ({ checked, label, linkLabel, linkTo, message, name, onChange }) => (
  <div className="form-check">
    <input
      checked={checked}
      className="form-check-input"
      id={`agreeCheckBox_${name}`}
      name={`agreeCheckBox_${name}`}
      onChange={event => {
        message && event.target.setCustomValidity('');
        onChange(!checked);
      }}
      onInvalid={event => message && event.target.setCustomValidity(message)}
      required
      type="checkbox"
    />
    <label
      className="form-check-label"
      style={{ fontWeight: 300 }}
      htmlFor={`agreeCheckBox_${name}`}
    >
      <span>{label} </span>
      {linkLabel && linkTo && (
        <Link rel="noopener noreferrer" target="_blank" to={linkTo}>{linkLabel}</Link>
      )}
    </label>
  </div>
);

export default AgreeCheckBox;
