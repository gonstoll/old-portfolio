import React from 'react';
import PropTypes from 'prop-types';

// Components
import Logo from './Logo/Logo';
import Switcher from '../Switcher/Switcher';

// Styles
import classes from './Header.module.css';

const header = ({ isLight, click }) => (
	<div className={classes.Header}>
		<Logo />
		<Switcher click={click} isLight={isLight} />
	</div>
);

header.propTypes = {
  isLight: PropTypes.bool,
  click: PropTypes.func
};

header.defaultProps = {
  isLight: true,
  click: () => {}
};

export default header;
