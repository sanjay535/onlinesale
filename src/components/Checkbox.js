import React from 'react';

const Checkbox = ({ label, handleValue }) => {
  const handleChange = (e) => {
    handleValue(e.target.checked);
  };
  return (
    <div className="checkbox">
      <input type="checkbox" onChange={handleChange} />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
