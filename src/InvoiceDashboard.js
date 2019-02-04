import React, {Component} from 'react';
import PropTypes from 'prop-types';


import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Formcard from './components/FormCard';
import TableListing from './components/Table';


        const styles = theme => ({
            root: {
              flexGrow: 1,
            },
            paper: {
              padding: theme.spacing.unit * 2,
              textAlign: 'center',
            },
          });

          function CenteredGrid(props) {
            const { classes } = props;
          
            return(
                <div className={classes.root}>
                    <Grid container spacing={0}>
                        <Grid item sm={8}>
                            <div className={classes.paper}>
                                <Formcard />
                            </div>
                        </Grid>
                        <Grid item sm={4}>
                            <div className={classes.paper}>Right Section</div>
                        </Grid>
                    </Grid>
                </div>
            );
        }

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(CenteredGrid);