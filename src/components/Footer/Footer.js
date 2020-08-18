import React from 'react';

// Shared
import social from '../../shared/social/social';

// Assets
import resume from '../../assets/Gonzalo_Stoll_2020.pdf';

// Components
import Link from '../Link/Link';

// UI
import Grid from '../../UI/Grid/Grid';
import GridItem from '../../UI/Grid/GridItem/GridItem';

// Styles
import classes from './Footer.module.css';

const socialMedia = social.map(singleSocial => {
    return (
        <div key={singleSocial.media} className={classes.SingleSocial}>
            <Link link={singleSocial.link} target="_blank">{singleSocial.media}</Link>
        </div>
    )
});

const footer = props => (
    <Grid>
        <GridItem>
            <div className={classes.Contact}>
                <h2>Interested in working together?</h2>
                <h2>↳ Contact me{' '} <Link link="mailto:stollgonzalo@gmail.com">here</Link>.</h2>
            </div>
        </GridItem>
        <GridItem>
            <div className={classes.Social}>
                <div className={classes.DownloadResume}>
                    ↳{' '}
                    <Link link={resume} download>Download my CV</Link>
                </div>
                {socialMedia}
            </div>
        </GridItem>
    </Grid>
);

export default footer;