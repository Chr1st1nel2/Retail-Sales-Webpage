import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, AppBar, Toolbar, Card, Typography, Chip } from '@material-ui/core';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
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
  },
  data: {
    color: '#bdbdbd',
  },
  tableHeader: {
    color: '#616161',
  }
}));

function App() {
  const classes = useStyles();
  // const labels = Utils.months({count: 12});

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
        {data.map(( data ) => (
          <Grid item xs={9} className={classes.grid}>
            <Grid container spacing={2} direction='column'>
              <Grid item>
                <Paper className={classes.graph}>Retail Sales</Paper>
              </Grid>
              <Grid item>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell className={classes.tableHeader}>WEEK ENDING</TableCell>
                        <TableCell className={classes.tableHeader} align="right">RETAIL SALES</TableCell>
                        <TableCell className={classes.tableHeader} align="right">WHOLESALE SALES</TableCell>
                        <TableCell className={classes.tableHeader} align="right">UNITS SOLD</TableCell>
                        <TableCell className={classes.tableHeader} align="right">RETAILER MARGIN</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className={classes.data}>
                      {data.sales.map((sale) => (
                        <TableRow key={sale.weekEnding}>
                          <TableCell className={classes.data} component="th" scope="row">
                            {sale.weekEnding}
                          </TableCell>
                          <TableCell className={classes.data} align="right">${sale.retailSales/1000}</TableCell>
                          <TableCell className={classes.data} align="right">${sale.wholesaleSales/1000}</TableCell>
                          <TableCell className={classes.data} align="right">{sale.unitsSold}</TableCell>
                          <TableCell className={classes.data} align="right">${sale.retailerMargin/1000}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}

export default App;
