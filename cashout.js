document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();


    const cashOut = getInputFieldValueById('input-cash-out')
    const pinNumber = getInputFieldValueById('input-cash-out-pin-number')
    // console.log('inside the click handler', cashOut, pinNumber)


    if(isNaN(cashOut)){
        alert('failed to cash out.')
        return
    }

    if(pinNumber === 1234){
     const balance = getTextFieldValueById('Account-balance');

      if(cashOut > balance){
        alert('you do not have enough money to cash out');
        return;
      }

     const newBalance = balance - cashOut;
     console.log(balance, newBalance)
     document.getElementById('Account-balance').innerText = newBalance;


        const div = document.createElement('div')
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        
        <h4 class="text-2xl font-bold">Cash-Out</h4>
        {cashOut}withraw. New Balance ${newBalance}</p>
        `

        document.getElementById('transaction-container').appendChild(div)
    }
    else{
        alert('no money for yoy....DGM.')
    }
})

