document.getElementById('btn-deposit').addEventListener('click', function() {
    const getDepositField = document.getElementById('input-deposit');
    const newDepositString = getDepositField.value;
    var newDeposit = parseFloat(newDepositString);

    getDepositField.value = '';

    const setDepositField = document.getElementById('set-deposit');
    const previousDepositString = setDepositField.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    const newTotalDeposit = previousDeposit + newDeposit;
    setDepositField.innerText = newTotalDeposit;

    const currentBalance = document.getElementById('set-balance')
    const previousBalanceString = currentBalance.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const newTotalBalance = previousBalance + newDeposit;
    currentBalance.innerText = newTotalBalance;
});

