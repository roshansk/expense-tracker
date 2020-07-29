import React, { Component } from 'react';
import Alerts from './Alerts';

class Forms extends Component {


    addBalance = () =>  {   
        const credit  = document.querySelector('#balance');
        if(credit.value < 1){
            this.props.callAlert('alert','alert alert-danger','Invalid Credit');
        }
        else{
            this.props.changeBal(credit.value);
            credit.value = null;
        }       
    }

    addTransaction = () => { 

        const stmt = document.querySelector('#title');
        const amount = document.querySelector('#amount');
        
        if(stmt.value !== '' &&  amount.value !=='' && amount.value > 0){

            if(this.props.bal < parseInt(amount.value)){
                this.props.callAlert('alert','alert alert-danger','Amount Exceeds Balance.');
            }
            else{
                this.props.addTransaction(stmt.value , parseInt(amount.value));
                stmt.value = '';
                amount.value = null;
            }
        }
        else{
            this.props.callAlert('alert','alert alert-danger','Invalid Transaction.');
        }
   }

    render() { 
        return ( 
            <div className='forms my-3'>
              <div id='alert' style={{display:'none'}}><Alerts alert={this.props.alert} /></div>
                <h5>Add Balance</h5>
                <div className='add-balance mt-2 pb-3'>
                    <div className='input-group'>
                        <input type='number' id='balance' className ='form-control' min='1' placeholder='Amount' />
                        <div className='input-group-append'>
                            <a className='btn input-group-text' onClick={this.addBalance.bind(this)}>Add</a>
                        </div>
                    </div>    
                </div>
                <div className='transaction-form pb-3'>
                    <h5>New Transaction</h5>
                    <div className='input-group mt-2 mb-3'>
                        <div className='input-group-prepend'>
                            <label className='input-group-text'>Transaction</label>
                        </div>
                        <input type='text' id='title'  className ='form-control' maxLength="25"  placeholder='Statement' disabled={this.props.bal < 1} />
                    </div>
                    <div className='input-group'>
                        <input type='number' id='amount'  className ='form-control' min="1" placeholder='Amount' disabled={this.props.bal < 1} />
                        <div className='input-group-append'>
                            <a className='btn input-group-text ' onClick={this.addTransaction.bind(this)} disabled={this.props.bal < 1}>Submit</a>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Forms;