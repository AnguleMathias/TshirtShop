/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const FormInput = ({...props}) => {
  const {
    type, name, value,
    placeholder, onChange,
    required
  } = props;
  return (
    <React.Fragment>
      <div className="input-group">
        <input
          required={required}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
          placeholder={placeholder} 
        />
      </div>
    </React.Fragment>
  )
}

export default FormInput;
