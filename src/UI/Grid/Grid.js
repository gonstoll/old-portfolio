import React from 'react';

import classes from './Grid.module.css';

const grid = props => {
    const gridClasses = [classes.Grid];
    if (props.marginBottom) gridClasses.push(classes.MarginBottom);
    if (props.subGrid) gridClasses.push(classes.SubGrid);

	return <div className={gridClasses.join(' ')}>{props.children}</div>;
};

export default grid;
