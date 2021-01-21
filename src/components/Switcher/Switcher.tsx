// Styles
import classes from './Switcher.module.css';

// Types
import { Switchable } from '../../shared/types/types';

const switcher = ({ isLight, click }: Switchable) => (
    <div className={`${classes.Switcher} ${!isLight && classes.DarkSwitch}`} onClick={click}></div>
);

export default switcher;
