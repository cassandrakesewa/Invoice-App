
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
    <form className={classes.container}>
      <Input
        placeholder ="Name"
        className={classes.input}
        name={props.name}
        value={props.namevalue}
        onChange={props.handleChange}
      />
      <Input
        placeholder="Email"
        className={classes.input}
        name={props.email}
        value={props.emailvalue}
        onChange={props.handleChange}
      />
      <Input
        placeholder="Address"
        className={classes.input}
        name={props.address}
        value={props.addressvalue}
        onChange={props.handleChange}
      />
      <Input
        placeholder="Phonenumber"
        className={classes.input}
        name={props.phone}
        value={props.phonevalue}
        onChange={props.handleChange}
      />
    </form>
  );
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);