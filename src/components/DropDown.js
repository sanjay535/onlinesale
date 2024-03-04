import React, { useState } from 'react';

const DropDown = ({ label, handleValue, dropDownOptions = [] }) => {
  const [value, setValue] = useState('Not Selected');

  const handleChange = (e) => {
    handleValue(e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select onChange={handleChange} value={value}>
        {dropDownOptions.map((dropDown) => (
          <option key={dropDown.id} value={dropDown.value}>
            {dropDown.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
