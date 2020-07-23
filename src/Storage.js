
    export const getRecords = () =>{

        let records = JSON.parse(localStorage.getItem('records'));
        
        if(records){
            return records;
        }
        else{
            records = {
                balance:0,
                spent:0,
                transactions:[]
            }
            localStorage.setItem('records',JSON.stringify(records));
            return records;
        }
    }

    export const addBalance = (newBalance) => {
        const records = getRecords();
        records.balance = newBalance;
        localStorage.setItem('records',JSON.stringify(records)); 
    }

    export const addTransaction = (newBal,newSpent,transactions) => {
        const records = getRecords();
        records.balance = newBal;
        records.spent = newSpent;
        records.transactions = transactions;
        localStorage.setItem('records',JSON.stringify(records));
    }

    export const removeTransaction = (id) =>{

        const records  = getRecords();
        const transactions  = records.transactions;
        transactions.map((item,index) => {
            if(item.id === parseInt(id)){
                console.log(transactions.splice(index,1));
                console.log('removed');
            }
        })

        records.transactions = transactions;
        localStorage.setItem('records',JSON.stringify(records));
        console.log(getRecords());
    }
