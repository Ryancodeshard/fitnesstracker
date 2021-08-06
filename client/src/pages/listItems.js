import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 375,
	},
}));


export const mainListItems = (
  <div>
	<Link to={'/'} style={{ color: 'inherit',textDecoration: 'none' }}>
		<ListItem button>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
		<ListItemText primary="Dashboard" />
		</ListItem>
	</Link>
	<Link to={'/gym'} style={{ color: 'inherit', textDecoration: 'none' }}>
		<ListItem button>
			<ListItemIcon>
				<FitnessCenterIcon />
			</ListItemIcon>
		<ListItemText primary="Gym" />
		</ListItem>
	</Link>
	<ListItem button>
		<ListItemIcon>
			<DirectionsRunIcon />
		</ListItemIcon>
	<ListItemText primary="Cardio" />
	</ListItem>
	<ListItem button>
		<ListItemIcon>
			<FastfoodIcon />
		</ListItemIcon>
	<ListItemText primary="Diet" />
	</ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Other tools</ListSubheader>
    <ListItem button>
		<ListItemIcon>
			<PeopleIcon />
		</ListItemIcon>
	<ListItemText primary="My Network" />
	</ListItem>
	<ListItem button>
		<ListItemIcon>
			<BarChartIcon />
		</ListItemIcon>
	<ListItemText primary="Reports" />
	</ListItem>
	<ListItem button>
		<ListItemIcon>
			<LayersIcon />
		</ListItemIcon>
	<ListItemText primary="Integrations" />
	</ListItem>
  </div>
);

export function GymListItems () {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={6} lg={4}>
			<Card className={fixedHeightPaper}>
				<CardHeader title='Bicep Curls'/>
				<CardMedia
					image={require('../assets/bicepcurls.jpg').default}
					style={{height:0,paddingTop:'56.25%'}}
				/>
				</Card>
			</Grid>
		</Grid>
	)
}