import React, { Component } from 'react';


class Transactions extends Component {

    removeTransaction = (el) => {
        const div = el.parentElement;
        const id = div.id;
        div.display = 'none';
        this.props.removeTransaction(id);
    }
   
    render() { 
        return ( 
           <div className='  transactions'>
               <h5 className='pb-1 mb-0'>Transactions</h5>
                <div className='transaction-list px-2'>
                {
                   this.props.transactions.map(item => 
                    <div className='transaction-item shadow-sm px-3' key={item.id} id={item.id}>
                        <p className='transaction-text py-2 my-auto'>Statement : {item.title}  ;  Amount : {item.amount} </p>
                        <a className='btn btn-remove my-auto text-danger close' onClick={(e) => this.removeTransaction(e.target)} >&times;</a>
                    </div>
                    )
               } 
                </div>
           </div>
         );
    }
}
 
export default Transactions;
