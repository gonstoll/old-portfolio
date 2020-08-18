import React from 'react';

import classes from './Layout.module.css';

const layout = props => (
	<div className={classes.Container}>
		{props.children}
	</div>
);

export default layout;