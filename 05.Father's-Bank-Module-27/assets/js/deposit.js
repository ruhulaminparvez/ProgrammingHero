document.getElementById('btn-deposit').addEventListener('click', function() {

    const newDepositAmount = getInputValueById('input-deposit');

    const previousDepositTotal = getElementValueById('set-deposit');

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setElementValueById('set-deposit', newDepositTotal);

    const previousBalance = getElementValueById('set-balance');
    const newBalance = previousBalance + newDepositAmount;

    setElementValueById('set-balance', newBalance);
});