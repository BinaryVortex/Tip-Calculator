function calc() {
    let billAmount = parseInt(document.getElementById('billAmount').value);
    let tipPer = parseInt(document.getElementById('tipPer').value);

    let tipAmount = (billAmount * tipPer) / 100;

    document.getElementById('tipAmount').innerHTML = `Tip Amount: ₹ ${tipAmount}`;
    document.getElementById('totalAmount').innerHTML = `Total Amount: ₹ ${billAmount + tipAmount}`;
}

function reset() {
    document.getElementById('billAmount').value = '';
    document.getElementById('tipPer').value = '';
    document.getElementById('tipAmount').innerHTML = 'Tip Amount:';
    document.getElementById('totalAmount').innerHTML = 'Total Amount:';
}