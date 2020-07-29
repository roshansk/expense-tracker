(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),s=t.n(l),c=(t(12),t(1)),o=t(2),i=t(4),m=t(3),p=function(){var e=JSON.parse(localStorage.getItem("records"));return e||(e={balance:0,spent:0,transactions:[]},localStorage.setItem("records",JSON.stringify(e)),e)},u=function(e){var a=p();a.balance=e,localStorage.setItem("records",JSON.stringify(a))},d=function(e,a,t){var n=p();n.balance=e,n.spent=a,n.transactions=t,localStorage.setItem("records",JSON.stringify(n))},b=function(e){var a=p(),t=a.transactions;t.map((function(a,n){a.id===parseInt(e)&&(console.log(t.splice(n,1)),console.log("removed"))})),a.transactions=t,localStorage.setItem("records",JSON.stringify(a)),console.log(p())},v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"header py-3 mb-3"},"Expense Tracker ",r.a.createElement("span",{id:"rupee-icon",className:"fas fa-rupee-sign"})))},h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"counter pb-2"},r.a.createElement("h5",{className:"pb-2"},"Your ",r.a.createElement("span",{className:"accent"},"Wallet"),r.a.createElement("button",{className:"btn float-right",id:"btn-reset","data-toggle":"tooltip","data-placement":"top",title:"Resets The Wallet & Clears all Transactions pb-4",onClick:this.props.resetWallet},r.a.createElement("i",{className:"fas fa-redo-alt"}))),r.a.createElement("div",{className:"balance-spent my-2 shadow-sm"},r.a.createElement("h5",{className:"m-0"},"Balance : ",r.a.createElement("span",{className:"text-success"},this.props.balance)),r.a.createElement("h5",{className:"m-0"},"Expense : ",r.a.createElement("span",{className:"text-danger"},this.props.spent))))}}]),t}(n.Component),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).removeTransaction=function(a){var t=a.parentElement,n=t.id;t.display="none",e.props.removeTransaction(n)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"  transactions"},r.a.createElement("h5",{className:"pb-1 mb-0"},"Transactions"),r.a.createElement("div",{className:"transaction-list px-2"},this.props.transactions.map((function(a){return r.a.createElement("div",{className:"transaction-item shadow-sm px-3",key:a.id,id:a.id},r.a.createElement("p",{className:"transaction-text py-2 my-auto"},"Statement : ",a.title,"  ;  Amount : ",a.amount," "),r.a.createElement("a",{className:"btn btn-remove my-auto text-danger close",onClick:function(a){return e.removeTransaction(a.target)}},"\xd7"))}))))}}]),t}(n.Component),E=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"alert",className:this.props.alert.style},this.props.alert.msg)}}]),t}(n.Component),g=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).addBalance=function(){var a=document.querySelector("#balance");a.value<1?e.props.callAlert("alert","alert alert-danger","Invalid Credit"):(e.props.changeBal(a.value),a.value=null)},e.addTransaction=function(){var a=document.querySelector("#title"),t=document.querySelector("#amount");""!==a.value&&""!==t.value&&t.value>0?e.props.bal<parseInt(t.value)?e.props.callAlert("alert","alert alert-danger","Amount Exceeds Balance."):(e.props.addTransaction(a.value,parseInt(t.value)),a.value="",t.value=null):e.props.callAlert("alert","alert alert-danger","Invalid Transaction.")},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"forms my-3"},r.a.createElement("div",{id:"alert",style:{display:"none"}},r.a.createElement(E,{alert:this.props.alert})),r.a.createElement("h5",null,"Add Balance"),r.a.createElement("div",{className:"add-balance mt-2 pb-3"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"number",id:"balance",className:"form-control",min:"1",placeholder:"Amount"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("a",{className:"btn input-group-text",onClick:this.addBalance.bind(this)},"Add")))),r.a.createElement("div",{className:"transaction-form pb-3"},r.a.createElement("h5",null,"New Transaction"),r.a.createElement("div",{className:"input-group mt-2 mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text"},"Transaction")),r.a.createElement("input",{type:"text",id:"title",className:"form-control",maxLength:"25",placeholder:"Statement",disabled:this.props.bal<1})),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"number",id:"amount",className:"form-control",min:"1",placeholder:"Amount",disabled:this.props.bal<1}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("a",{className:"btn input-group-text ",onClick:this.addTransaction.bind(this),disabled:this.props.bal<1},"Submit")))))}}]),t}(n.Component),y=(t(13),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={balance:0,spent:0,transactions:[],alert:{style:"",msg:""}},e.resetWallet=function(){e.setState({balance:0,spent:0,transactions:[]});var a=p();a.balance=0,a.spent=0,a.transactions=[],localStorage.setItem("records",JSON.stringify(a))},e.displayRecords=function(){var a=p();console.log(a),e.setState({balance:a.balance,spent:a.spent,transactions:a.transactions})},e.changeBalance=function(a){a=isNaN(a)?0:a;var t=e.state.balance+parseInt(a);e.setState({balance:t}),u(t),e.callAlert("alert","alert alert-success","Amount Added.")},e.addTransaction=function(a,t){var n=e.state.transactions;n.push({id:Math.floor(1e3+9999*Math.random()),title:a,amount:t});var r=e.state.balance-t,l=e.state.spent+t;e.setState({balance:r,spent:l,transactions:n}),d(r,l,n),e.callAlert("alert","alert alert-primary","Transaction Saved.")},e.removeTransaction=function(a){var t=e.state.transactions;t.map((function(n,r){n.id===parseInt(a)&&(t.splice(r,1),e.callAlert("alert","alert alert-primary","Transaction Removed"))})),e.setState({transactions:t}),b(a)},e.setAlert=function(a,t,n){document.getElementById(a).style="display:block",e.setState({alert:{style:t,msg:n}})},e.clearAlert=function(a){setTimeout((function(){e.setState({alert:{style:"",msg:""}}),document.getElementById(a).style="display:none"}),1500)},e.callAlert=function(a,t,n){e.setAlert(a,t,n),e.clearAlert(a)},e.componentDidMount=function(){window.addEventListener("load",e.displayRecords)},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container main mx-auto shadow-sm"},r.a.createElement(v,null),r.a.createElement(h,{resetWallet:this.resetWallet,balance:this.state.balance,spent:this.state.spent}),r.a.createElement(f,{transactions:this.state.transactions,removeTransaction:this.removeTransaction}),r.a.createElement(g,{alert:this.state.alert,callAlert:this.callAlert,changeBal:this.changeBalance,bal:this.state.balance,alerts:this.state.alerts,addTransaction:this.addTransaction}))}}]),t}(n.Component));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.03742ab8.chunk.js.map