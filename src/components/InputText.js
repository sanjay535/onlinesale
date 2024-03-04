import React, { useState } from 'react';

export const InputText = ({ label, handleValue }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    handleValue(e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="inputText">
      <label>{label}</label>
      <input value={value} onChange={handleChange} type="text" />
    </div>
  );
};
