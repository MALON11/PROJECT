'use strict'


const account1 = {
    fullName: "Jackline Maloni",
    transaction: [2500, -3000, 4000, 10000,4000, 10000, -3000],
    pin: 1111
};
const account2 = {
    fullName: "Maloni Sumbizi",
    transaction:[ 4000, 10000, 4000,2500, -3000, 4000, 10000, 10000, 4000, 10000,-3000],
    pin: 1111
};

const account3 = {
    fullName: "Frank sumizi",
    transaction: [2500, -3000, 4000, 10000, -3000,10000, 4000, 10000,],
    pin: 1111
};
const account4 = {
    fullName: "Ben Kinyunyu",
    transaction: [2500,10000, 4000, 10000, -3000, 4000, 10000,],
    pin: 1111
};

const account5 = {
    fullName: "Amani Issah",
    transaction: [2500, -3000, 4000, 10000, -3000],
    pin: 1111
};


let transactionHolder = document.querySelector('.rigth');
let balance = document.querySelector(".totalbalance");

let trantyp;

const displayTransaction=(transaction) => {
    transaction.map((trans, i) => {
    trantyp = trans > 0 ? "deposit" : "withdrawl"
        
    // if (trans > 0) {
    //     trantyp = "deposit"
    // } else {
    //     trantyp="withdrawl"
    // }
   
        
    const moneyhistory = `
                    <div class="transactionhistory">
                    <div class="sub">
                        <div>${i+1} <button class=${trantyp}>${trantyp}</button> Today</div>
                    </div>
                    <div class="totaltrans">${Math.abs(trans)} €</div>
                </div>`
    
    transactionHolder.insertAdjacentHTML("afterbegin",moneyhistory)
});

}


displayTransaction(account2.transaction)


const displaytotal = (transaction) => {
    
   const balancetotal =  transaction.reduce((start, tran) => {
        return start+tran
   }, transaction[0])
    
balance.textContent = `${balancetotal}€` 

}

displaytotal(account2.transaction)