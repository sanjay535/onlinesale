import React, { useState } from 'react';

const TextArea = ({ label, handleValue }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    handleValue(e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="textArea">
      <label>{label}</label>
      <textarea value={value} onChange={handleChange}></textarea>
    </div>
  );
};

export default TextArea;
