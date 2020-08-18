import React from 'react';

import classes from './GridItem.module.css';

const gridItem = props => {
    return (
        <div className={classes.GridItem}>
            {props.title ? <p className={classes.Title}>{props.title}</p> : null}
            {props.children}
        </div>
    );
};

export default gridItem;