import React, {Component} from 'react';
import  {getRecords,addBalance,addTransaction,removeTransaction} from './Storage';
import Header from './comps/Header';
import Counter from './comps/Counter';
import Transactions from './comps/Transactions';
import Forms from './comps/Forms';
import './App.css';

class App extends Component {
  
  state = { 
    balance:0,
    spent:0,
    transactions:[],
    alert:{
      style:'',
      msg:''
    }
  }


  resetWallet = () =>{
    this.setState({
      balance:0,
      spent:0,
      transactions:[]
    });

    const records = getRecords();
    records.balance = 0;
    records.spent = 0;
    records.transactions = [];

    localStorage.setItem('records',JSON.stringify(records));
  }


   displayRecords = () => {

     const records = getRecords();
     console.log(records);

     this.setState({
       balance:records.balance,
       spent:records.spent,
       transactions:records.transactions
     });
   }

   changeBalance =  (amount) => { 
    isNaN(amount) ? amount = 0 : amount = amount; 
    const newBal = this.state.balance + parseInt(amount);
    this.setState({ balance : newBal});
    addBalance(newBal);
    this.callAlert('alert','alert alert-success','Amount Added.');
   }

   addTransaction = (statement,amount) => {
    const Transactions = this.state.transactions;
    Transactions.push({ id:Math.floor(1000 + Math.random() * 9999), title:statement, amount :amount});
    const cBal = this.state.balance - amount;
    const totalSpent  = this.state.spent + amount;

    this.setState({
      balance:cBal,
      spent: totalSpent,
      transactions:Transactions
    });

    addTransaction(cBal,totalSpent,Transactions);
    this.callAlert('alert','alert alert-primary', 'Transaction Saved.');
   }

   removeTransaction = (id) =>{
    const newTransactions = this.state.transactions;
    newTransactions.map((item,index) => {
      if(item.id === parseInt(id)){
        newTransactions.splice(index,1);
        this.callAlert('alert','alert alert-primary','Transaction Removed');
      }
    })

    this.setState({transactions : newTransactions});
    removeTransaction(id);
  }

  
  setAlert = (id,style,msg) => {
    document.getElementById(id).style='display:block';
    this.setState({alert:{style:style,msg:msg}});
  }

  clearAlert = (id) => {    
    setTimeout(()=>{
      this.setState({alert:{ style:'', msg:'' }});
      document.getElementById(id).style ='display:none';
    },1500)
  }

  callAlert = (id,style,msg) => {
    this.setAlert(id,style,msg);
    this.clearAlert(id);
  }

   componentDidMount = () => {
     window.addEventListener('load',this.displayRecords);
   }

  render() { 

    return ( 
      <div className="container main mx-auto shadow-sm">
      <Header />
      <Counter resetWallet ={this.resetWallet}  balance={this.state.balance} spent={this.state.spent} />
      <Transactions transactions = {this.state.transactions} removeTransaction={this.removeTransaction}  />
      <Forms alert = {this.state.alert} callAlert ={this.callAlert}  changeBal={this.changeBalance} bal={this.state.balance} alerts={this.state.alerts}  addTransaction ={this.addTransaction} />
    </div>
     );
  }
}
 
export default App;