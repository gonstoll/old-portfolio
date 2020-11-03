import React from 'react';
import PropTypes from 'prop-types';

// Styles
import classes from './Switcher.module.css';

const switcher = ({ isLight, click }) => (
	<div className={`${classes.Switcher} ${!isLight && classes.DarkSwitch}`} onClick={click}></div>
);

switcher.propTypes = {
  isLight: PropTypes.bool,
  click: PropTypes.func
};

switcher.defaultProps = {
  isLight: true,
  click: () => {}
};

export default switcher;
