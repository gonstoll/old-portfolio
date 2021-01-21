// Styles
import classes from './Link.module.css';

// Types
import { Link } from '../../shared/types/types';

const link = ({ link, target, download, children }: Link) => (
    <a className={classes.Link} href={link} target={target} download={download}>
        {children}
    </a>
);

export default link;
