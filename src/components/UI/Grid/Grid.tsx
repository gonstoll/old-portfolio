// Styles
import classes from './Grid.module.css';

// Types
import { Grid } from '../../../shared/types/types';

const grid = ({ marginBottom, subGrid, children }: Grid) => (
	<div className={`${classes.Grid} ${marginBottom && classes.MarginBottom} ${subGrid && classes.SubGrid}`}>{children}</div>
);

export default grid;
