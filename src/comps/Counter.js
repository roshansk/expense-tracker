import React, { Component } from 'react';

class Counter extends Component {
    
    render() { 
        return ( 
            <div className='counter pb-2'>
                <h5 className='text-dark pb-2'>Your Wallet <button className='fas fa-redo-alt float-right' id='btn-reset' data-toggle='tooltip' data-placement='top' title='Resets The Wallet & Clears all Transactions' onClick={this.props.resetWallet}></button></h5> 
                <div className='balance-spent my-2 text-dark shadow-sm'>
                        <h5 className='m-0'>Balance : <span className='text-success'>{this.props.balance}</span></h5>
                        <h5 className='m-0'>Expense : <span className='text-danger'>{this.props.spent}</span></h5>   
                </div>
            </div>
         );
    }
}
 
export default Counter;
