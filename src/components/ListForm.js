import React, {Component} from 'react';
import {connect} from 'react-redux'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as actions from '../store/actions/index';

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
  description:{
    margin:'8px 8px 20px 8px',
  },
  button:{
    height: 40,
    margin: 'auto 0'
  }
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

class ListForm extends Component{
  state = {
      price: 0.00,
      currency: 'GHC',
      quantity: 1,
      amount: 0.00,
      description:''
    }  

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleonblur(){
    let tamount = this.state.price * this.state.quantity;
    
    this.setState({
      amount: tamount
    })
  }

  handleOnSubmitProjectInfo = () =>{
      const productInfo = {
        description:this.state.description,
        price:+this.state.price,
        quantity:this.state.quantity,
        amount:this.state.amount
      };

      this.props.onAddProductDetails(productInfo);

  }

 
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container}>
        
        <TextField
          id="outlined-full-width"
          label="Description"
          className={classes.description}
          value={this.state.description}
          name="description"
          onChange={this.handleChange.bind(this)}
          variant="outlined"
          fullWidth
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

      <Button variant="contained" color="primary" className={classes.button} onClick={this.handleOnSubmitProjectInfo}>
        Add
      </Button>
      </form>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    productInfo:state.productInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onAddProductDetails: (productInfo) => dispatch(actions.addProductDetails(productInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ListForm));