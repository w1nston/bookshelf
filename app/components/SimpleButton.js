import React, { PropTypes } from 'react';

function SimpleButton({ label, onClick }) {
  return (
    <div className="simple-button-container">
      <button onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

SimpleButton.displayName = 'SimpleButton';
SimpleButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default SimpleButton;
