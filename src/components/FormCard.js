import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import From from './Form';
import To from './Form';
import Data from './ListForm';
import TableListings from './Table';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const formCard = (props) => {
  const { classes } = props;

  return (
    <Grid container spacing={24}>
        <Grid item sm={6}>
          <Card className={classes.card}>
            <AppBar position="static" color="default">
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                From
              </Typography>
            </AppBar>
            <CardContent>
              <From />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card className={classes.card}>
            <AppBar position="static" color="default">
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                To
              </Typography>
            </AppBar>
            <CardContent>
                <To />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={10}>
          <Card className={classes.card}>
            <CardContent>
                <Data />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12}>
            <TableListings/>
        </Grid>
    </Grid>
   
    
  );
}

formCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(formCard);