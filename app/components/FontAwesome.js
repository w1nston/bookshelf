import React, { PropTypes } from 'react';
import classnames from 'classnames';

function getClassNames(icons = []) {
  return classnames(
    'fa',
    icons.map(icon => `fa-${icon}`)
  );
}

function FontAwesome({ icons }) {
  return <i className={getClassNames(icons)}></i>;
}

FontAwesome.displayName = 'FontAwesome';
FontAwesome.propTypes = {
  icons: PropTypes.array,
};

export default FontAwesome;
