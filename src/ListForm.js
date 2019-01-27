import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 130,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  txtf:{
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 80,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
    {
      value: 'GHC',
      label: '¢',
    },
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  }
];

class OutlinedTextFields extends React.Component {
  constructor(){
    super();
    this.state = {
      price: 0.00,
      amount: 0.00,
      currency: 'GHC',
      quantity: 1,
      amount: 0.00  
    };
  }
  

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
 }

handleonblur(){
  let tamount = this.state.price * this.state.quantity;
  console.log(tamount); 
  this.setState({
    amount: tamount
  })
}

 
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-full-width"
          label="Description"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

      <TextField
          id="outlined-select-currency-native"
          select
          label="Currency"
          className={classes.txtf}
          value={this.state.currency}
          onChange={this.handleChange.bind(this)}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          id="outlined-number"
          label="Quantity"
          name="quantity"
          type="number"
          value={this.state.quantity}
          className={classes.txtf}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
          onChange={this.handleChange.bind(this)}
          onBlur={this.handleonblur.bind(this)}
        />
     
        

        <TextField
          id="outlined-read-only-input"
          label="Price"
          name="price"
          value={this.state.price}
          className={classes.textField}
          onChange={this.handleChange.bind(this)}
          onBlur={this.handleonblur.bind(this)}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="outlined-read-only-input"
          label="Amount"
          name="amount"
          className={classes.textField}
          value={this.state.amount}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);