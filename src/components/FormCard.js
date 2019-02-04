import React, {Component} from 'react';
import ReactToPrint from'react-to-print';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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

class FormCard extends Component{
  state={
    userEmail:'kljhj',
    userName:'',
    userAddress:'',
    userNumber:null,
    clientEmail:'',
    clientName:'',
    clientAddress:'',
    clientNumber:null
  }

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  onSubmitToPreview = () =>{
    const clientInfo = {
      name:this.state.clientName,
      email:this.state.clientEmail,
      address:this.state.clientAddress,
      phonenumber:this.state.clientNumber
    }
    // console.log("userInfo", this.state.userEmail);

    const userInfo = {
      name:this.state.userName,
      email:this.state.userEmail,
      address:this.state.userAddress,
      phonenumber:this.state.userNumber
    }

    console.log("userInfo", userInfo);
    console.log("clientInfo", clientInfo);
    console.log("productInfo", this.props.productInfo);
  }


  render(){
  const { classes } = this.props;

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
              <From 
              name="userName" 
              email="userEmail"
              address="userAddress"
              phone="userNumber"
              namevalue={this.state.userName}
              emailvalue={this.state.userEmail}
              addressvalue={this.state.userAddress}
              phonevalue={this.state.userPhone}
              handleChange={this.handleChange.bind(this)} />
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
                <To 
                name="clientName" 
                email="clientEmail"
                address="clientAddress"
                phone="clientNumber"
                namevalue={this.state.clientName}
                emailvalue={this.state.clientEmail}
                addressvalue={this.state.clientAddress}
                phonevalue={this.state.clientPhone}
                handleChange={this.handleChange.bind(this)}/>
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
            <TableListings />
        </Grid>
        <Button variant="contained" color="primary" onClick={this.onSubmitToPreview}>
        Preview to Print
        </Button>
              
    </Grid>
   
    
  );

  }
}

const mapStateToProps = (state) => {
  return{
  productInfo:state.productInfo
  }
}

export default connect(mapStateToProps)(withStyles(styles)(FormCard));