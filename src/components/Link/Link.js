import React from 'react';
import PropTypes from 'prop-types';

// Styles
import classes from './Link.module.css';

const link = ({ link, target, download, children }) => (
  <a className={classes.Link} href={link} target={target} download={download}>
    {children}
  </a>
);

link.propTypes = {
	link: PropTypes.string,
	target: PropTypes.string,
	download: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

link.defaultProps = {
	link: '',
	target: '',
	download: false,
	children: [],
};

export default link;
