import React, { PropTypes } from 'react';
import classnames from 'classnames';

function getClassNames(icons = []) {
  return classnames(
    'fa',
    icons.map(icon => `fa-${icon}`),
  );
}

export default function FontAwesome({ icons }) {
  return <i className={getClassNames(icons)} />;
}

FontAwesome.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string),
};
