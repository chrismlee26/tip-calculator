const display = document.querySelector('#display')
const total = document.querySelector('#total')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')

function calculateTip() {
    const billValue = billInput.value
    const tipValue = tipInput.value
    const peopleValue = peopleInput.value

    const tipAmount = billValue * tipValue / peopleValue / 100
    display.innerHTML = tipAmount.toFixed(2)

    const totalAmount = billValue * (1 + tipValue / 100)
    total.innerHTML = totalAmount.toFixed(2)
}

calculateTip()
billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)