// Styles
import classes from './Layout.module.css';

// Types
import { WithChildren } from '../../../shared/types/types';

const layout = ({ children }: WithChildren) => <div className={classes.Container}>{children}</div>;

export default layout;
