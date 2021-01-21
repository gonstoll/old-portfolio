// Styles
import classes from './GridItem.module.css';

// Types
import { GridItem } from '../../../../shared/types/types';

const gridItem = ({ title, children }: GridItem) => (
	<div className={classes.GridItem}>
		{title ? <p className={classes.Title}>{title}</p> : null}
		{children}
	</div>
);

export default gridItem;
