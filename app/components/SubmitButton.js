import React, { PropTypes } from 'react';

function SubmitButton(props) {
  return (
    <div className="submit-button-container">
      <button onClick={props.onSubmit}>
        {props.label}
      </button>
    </div>
  );
}

SubmitButton.displayName = 'SubmitButton';
SubmitButton.propTypes = {
  label: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default SubmitButton;
