function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    
    return inputNumber;
}

function getTextFieldValueById(id){
    const inputText = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputText)
    return inputNumber;
}

function showSectionById (id){
    
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-money-form').classList.add('hidden')
    document.getElementById('transaction-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}