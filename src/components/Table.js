import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  list: {
    width: '40%',
    maxWidth: 360,
    float:'right'
  },
  listItem:{
      textAlign:'end'
  }
});

class ProductTable extends Component{
    state ={
        discount:0
    }

    getSum = (total, num) => {
        return total + num
    }

    componentDidUpdate(){
        this.props.productInfo;

    }

    render(){
        const { classes } = this.props;
        let amount = [];
        let subtotal = 0;
        let total = 0;

        let tableDetails = (<TableRow><TableCell>Add Invoice Details</TableCell></TableRow>);

        if(this.props.productInfo.length > 0){
            tableDetails = this.props.productInfo.map(product => {
                amount.push(product.amount)
                return(
                <TableRow key={product.description}>
                    <TableCell align="right">{product.description}</TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <TableCell align="right">{product.quantity}</TableCell>
                    <TableCell align="right">{product.amount}</TableCell>
                </TableRow>
                )
            })
            subtotal=amount.reduce(this.getSum, 0);
            total = subtotal;
        }
        

        return (
            <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Unit Cost</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Amount</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {tableDetails}
                </TableBody>
            </Table>

            <List component="nav" className={classes.list}>
                <ListItem >
                    <ListItemText primary="Subtotal" />
                    <ListItemText primary={subtotal} className={classes.listItem}/>
                </ListItem>
                <ListItem >
                    <ListItemText primary="Discount" />
                    <ListItemText primary="0" className={classes.listItem}/>
                </ListItem>
                <ListItem >
                    <ListItemText primary="Tax" />
                    <ListItemText primary="0" className={classes.listItem}/>
                </ListItem>
                <Divider />
                <ListItem >
                    <ListItemText primary="Total" />
                    <ListItemText primary={total} className={classes.listItem}/>
                </ListItem>
            </List>
            
            </Paper>
        );
    }
}

ProductTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state =>{
    return{
        productInfo:state.productInfo
    }
}

export default connect(mapStateToProps)(withStyles(styles)(ProductTable));
