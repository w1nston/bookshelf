import React, { PropTypes } from 'react';

function TextInput(props) {
  return (
    <div className="text-input-container">
      <input
        name={props.name}
        placeholder={props.placeholder}
        value={props.text}
        onChange={props.onChange}
      />
    </div>
  );
}

TextInput.displayName = 'TextInput';
TextInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
