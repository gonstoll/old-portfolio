import React from 'react';

// Components
import Logo from './Logo/Logo';
import Switcher from '../Switcher/Switcher';

// Styles
import classes from './Header.module.css';

const header = props => (
	<div className={classes.Header}>
		<Logo />
		<Switcher click={props.click} isLight={props.isLight} />
	</div>
);

export default header;