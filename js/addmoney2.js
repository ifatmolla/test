document.getElementById('btn-add-money')
.addEventListener('click', function(event){
 
    event.preventDefault();

   const addMoney = getInputFieldValueById('input-add-money')
   const pinNumber = getInputFieldValueById('input-pin-number')
   
   if(isNaN(addMoney)){
    alert('failed to add money');
    return
   }


   if(pinNumber === 1234){
    const balance = getTextFieldValueById('Account-balance');
    console.log(balance, addMoney);
    const  newBalance = balance + addMoney;

    document.getElementById('Account-balance').innerText = newBalance;

    const p = document.createElement('p');
    p.innerText = ` Added: ${addMoney} TK. Balance: ${newBalance}`;
    console.log(p);

    document.getElementById('transaction-container').appendChild(p);
   }

   else{
     alert('fieled to add the money')
   }
})

