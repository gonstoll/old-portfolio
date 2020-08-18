import React from 'react';
import classes from './Switcher.module.css';

const switcher = props => {
    const switchClasses = [classes.Switcher];
    if (!props.isLight) {
        switchClasses.push(classes.DarkSwitch);
    }

    return <div className={switchClasses.join(' ')} onClick={props.click}></div>;
};

export default switcher;