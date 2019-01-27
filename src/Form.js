
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

function Inputs(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Input
        placeholder ="Name"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Email"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Address"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Phonenumber"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    </div>
  );
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);