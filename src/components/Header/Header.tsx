import React from 'react';

// Components
import Logo from './Logo/Logo';
import Switcher from '../Switcher/Switcher';

// Styles
import classes from './Header.module.css';

// Types
import { Switchable } from '../../shared/types/types';

const header = ({ isLight, click }: Switchable) => (
    <div className={classes.Header}>
        <Logo />
        <Switcher click={click} isLight={isLight} />
    </div>
);

export default header;
