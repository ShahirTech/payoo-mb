document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('add-out');

    const addAmount = document.getElementById('amount').value;
    const pin = document.getElementById('pin').value;
    const currentBalance = document.getElementById('ac-balance').innerText;
    console.log(addAmount, pin, currentBalance);

    if (pin === '1234') {
        const addMoney = parseInt(addAmount);
        const balance = parseInt(currentBalance);
        const newBalance = addMoney + balance;

        document.getElementById('ac-balance').innerText = newBalance;
      } 
      
      else{
        alert("Wrong Pin");
      }
})

document.getElementById('cashout-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('add-out');

    const cashoutAmmount = document.getElementById('c-amount').value;
    const pin = document.getElementById('c-pin').value;
    const currentBalance = document.getElementById('ac-balance').innerText;
    console.log(cashoutAmmount, pin, currentBalance);

    if (pin === '1234') {
        const addMoney = parseInt(cashoutAmmount);
        const balance = parseInt(currentBalance);
        if(addMoney>balance){
          const p = document.createElement('p');
          p.classList.add('text-red-500','z-10','top-[63px]','absolute');
          p.innerText = `insufficient balance`;
          document.getElementById('ib').appendChild(p);
          return;
        }
        const newBalance = balance - addMoney;

        document.getElementById('ac-balance').innerText = newBalance;
      } 
      
      else{
        alert("Wrong Pin");
      }
})

// show the cash out form
document.getElementById('show-cashout')
    .addEventListener('click', function () {

        // show cash out button clicked
        console.log('show cash out button clicked')
        document.getElementById('cashout-form').classList.remove('hidden');

        // hide the add money form
        document.getElementById('add-money-form').classList.add('hidden');
    });


// show add money form and hide the cash out form
document.getElementById('show-add-money')
    .addEventListener('click', function () {

        document.getElementById('add-money-form').classList.remove('hidden');

        document.getElementById('cashout-form').classList.add('hidden');
    })