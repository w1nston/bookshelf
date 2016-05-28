import React, { PropTypes } from 'react';

function TextInput({ name, placeholder, value }) {
  return (
    <div className="text-input-container">
      <input
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

TextInput.displayName = 'TextInput';
TextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
};

export default TextInput;
