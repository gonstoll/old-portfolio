// Shared
import projects from '../../shared/projects/projects';
import skills from '../../shared/skills/skills';

// Components
import Link from '../Link/Link';

// UI
import Grid from '../UI/Grid/Grid';
import GridItem from '../UI/Grid/GridItem/GridItem';

// Styles
import classes from './Body.module.css';

const body = () => {
	const selectedProjects = projects.map(proj => (
		<Link key={proj.title} link={proj.link} target="_blank">
			{proj.title}
		</Link>
	));
	const selectedSkills = skills.map(skill => <p key={skill}>{skill}</p>);

	return (
		<div className={classes.Body}>
			<Grid>
				<Grid subGrid>
					<GridItem title="Selected projects">
						<div className={classes.SelectedProjects}>{selectedProjects}</div>
					</GridItem>
					<GridItem title="Skills">{selectedSkills}</GridItem>
				</Grid>
				<GridItem>
					<p className="italic text-right">"I won’t rest until there’s a pixel-perfect solution on the screen"</p>
				</GridItem>
			</Grid>
		</div>
	);
};

export default body;
