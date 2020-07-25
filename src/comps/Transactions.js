import React, { Component } from 'react';


class Transactions extends Component {

    removeTransaction = (el) => {
        const div = el.parentElement.parentElement;
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
                        <p className='my-auto'>Statement : {item.title}  ,  Amount : {item.amount} <a className='btn btn-remove text-danger close' onClick={(e) => this.removeTransaction(e.target)} >&times;</a></p>
                    </div>
                    )
               } 
                </div>
           </div>
         );
    }
}
 
export default Transactions;
