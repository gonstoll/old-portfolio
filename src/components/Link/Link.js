import React from 'react';

import classes from './Link.module.css';
import PropTypes from 'prop-types';

const link = props => {
    return (
		<a className={classes.Link} href={props.link} target={props.target} download={props.download}>
			{props.children}
		</a>
	);
}

link.propTypes = {
	link: PropTypes.string,
	target: PropTypes.string,
	download: PropTypes.bool
};

export default link;