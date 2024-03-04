import React, { useState } from 'react';

const RadioButton = ({ label, groupId, handleValue, radioBtnConfig = [] }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleRadioChange = (value) => {
    handleValue(value);
    setSelectedValue(value);
  };
  return (
    <div className="radioBtn">
      <label>{label}</label>
      {radioBtnConfig.map((radioBtn) => (
        <div key={radioBtn.id}>
          <input
            checked={selectedValue === radioBtn.value}
            onChange={() => handleRadioChange(radioBtn.value)}
            type="radio"
            id={radioBtn.id}
            name={groupId}
            value={radioBtn.value}
          />
          <label htmlFor={radioBtn.id}>{radioBtn.value}</label>
          <br />
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
