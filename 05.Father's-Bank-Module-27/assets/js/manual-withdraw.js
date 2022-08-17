document.getElementById('btn-withdraw').addEventListener('click', function() {
    const getWithdrawField = document.getElementById('input-withdraw');
    const newWithdrawString = getWithdrawField.value;
    var newWithdraw = parseFloat(newWithdrawString);

    getWithdrawField.value = '';

    const setWithdrawField = document.getElementById('set-withdraw');
    const previousWithdrawString = setWithdrawField.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    const newTotalWithdraw = previousWithdraw + newWithdraw;
    setWithdrawField.innerText = newTotalWithdraw;

    const currentBalance = document.getElementById('set-balance')
    const previousBalanceString = currentBalance.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const newTotalBalance = previousBalance - newWithdraw;
    currentBalance.innerText = newTotalBalance;
});