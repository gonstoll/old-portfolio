import React from 'react';
import PropTypes from 'prop-types';

import classes from './GridItem.module.css';

const gridItem = ({ title, children }) => (
	<div className={classes.GridItem}>
		{title ? <p className={classes.Title}>{title}</p> : null}
		{children}
	</div>
);

gridItem.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

gridItem.defaultProps = {
	title: '',
	children: [],
};

export default gridItem;
