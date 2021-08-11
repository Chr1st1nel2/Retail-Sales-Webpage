import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, AppBar, Toolbar, Card, Typography, Chip } from '@material-ui/core';
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
  info: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height:'100vh',
    color: theme.palette.text.secondary,
  },
  title: {
    padding: '20px 30px 5px',
    fontWeight: 'bold',
    color: '#212121'
  },
  subtitle: {
    padding: '0px 30px 20px',
    color: '#bdbdbd'
  },
  tag: {
    background: 'white',
    margin: '0px 3px 20px',
  },
  graph: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  table: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position='static' className={classes.appbar}>
        <Toolbar>
          <img src={logo} alt='logo' className={classes.logo} />
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} className={classes.grid}>
        {data.map(( data ) => (
          <Grid item xs={3} className={classes.grid}>
            <Card className={classes.info}>
              <img src={data.image} alt='url' className={classes.logo} />
              <Typography variant="h5" className={classes.title}>
                {data.title}
              </Typography>
              <Typography variant="body2" className={classes.subtitle}>
                {data.subtitle}
              </Typography>
              {data.tags.map((tag)=>(
                <Chip label={tag} variant="outlined" className={classes.tag}/>
              ))}
            </Card>

          </Grid>
        ))}
          <Grid item xs={9} className={classes.grid}>
            <Grid container spacing={2} direction='column'>
              <Grid item>
                <Paper className={classes.graph}>1</Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.table}>2</Paper>
              </Grid>
            </Grid>
          </Grid>

      </Grid>
    </Fragment>
  );
}

export default App;
