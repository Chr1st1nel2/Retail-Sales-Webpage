import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, AppBar, Toolbar } from '@material-ui/core'
import data from './stackline_frontend_assessment_data_2021.json';
import logo from './stackline_logo.svg';
import './App.css';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: '#002947',
  },
  logo: {
    maxWidth: 130,
  },
  grid: {
    width: '100%',
    margin: '0px',
    paddingTop: '50px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />
        </Toolbar>
      </AppBar>

    <Grid container spacing={2} className={classes.grid}>
      <Grid item xs={3} direction="row">
        <Paper className={classes.paper}>1</Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper className={classes.paper}>1</Paper>
      </Grid>
    </Grid>
    </React.Fragment>
  );
}

export default App;
