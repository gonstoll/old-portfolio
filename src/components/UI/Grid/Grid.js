import React from 'react';
import PropTypes from 'prop-types';

import classes from './Grid.module.css';

const grid = ({ marginBottom, subGrid, children }) => (
	<div className={`${classes.Grid} ${marginBottom && classes.MarginBottom} ${subGrid && classes.SubGrid}`}>{children}</div>
);

grid.propTypes = {
	marginBottom: PropTypes.bool,
	subGrid: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

grid.defaultProps = {
	marginBottom: false,
	subGrid: false,
	children: [],
};

export default grid;
