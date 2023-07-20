const depositeBtn = document.querySelector('#deposite-btn');
const withdrawBtn = document.querySelector('#withdraw-btn');

const depositeField = document.querySelector('#deposite-field');
const withdrawField = document.querySelector('#withdraw-field');

const depositeAmount = document.getElementById('deposite-amount');
const withdrawAmount = document.getElementById('withdraw-amount');
const balanceAmount = document.getElementById('balance-amount');

// console.log(depositeBtn, withdrawBtn, depositeField, withdrawField, depositeAmount, withdrawAmount, balanceAmount);

depositeBtn.addEventListener('click', function(){
    // console.log("Clicked");
    const depositeFieldValue = depositeField.value;
    // console.log(depositeFieldValue);
    const depositeConvertAmount = parseFloat(depositeFieldValue);
    // console.log(typeof depositeConvertAmount);

    const previousDeposite = depositeAmount.innerText;
    const previousBalance = balanceAmount.innerText;
    // console.log(previousDeposite);
    const previousDepositeConvert = parseFloat(previousDeposite);
    const previousBalanceConvert = parseFloat(previousBalance);
    // console.log(typeof previousDepositeConvert);
    // console.log(depositeConvertAmount, previousDepositeConvert);

    const totalDeposite = depositeConvertAmount + previousDepositeConvert;
    const totalBalance = depositeConvertAmount + previousDepositeConvert;
    // console.log(totalDeposite);

    depositeAmount.innerText = totalDeposite;
    balanceAmount.innerText = totalBalance;

    depositeField.value = '';
})

