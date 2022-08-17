document.getElementById('btn-withdraw').addEventListener('click', function() {
    const newWithdrawAmount = getInputValueById('input-withdraw');

    const previousWithdrawTotal = getElementValueById('set-withdraw');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setElementValueById('set-withdraw', newWithdrawTotal);

    const previousBalance = getElementValueById('set-balance');
    const newBalance = previousBalance - newWithdrawAmount;

    setElementValueById('set-balance', newBalance);
});