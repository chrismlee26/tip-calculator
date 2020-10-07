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
}

function calculateTotal() {
    // const addTotal = parseInt(billInput.value) + display.innerHTML
    // const billTotal = parseFloat(billInput.value)
    // const displayTotal = parseFloat(display.innerHTML)
    // const addTotal = billTotal + displayTotal

    const billTotal = billInput.value
    const displayTotal = display.innerHTML
    const addTotal = billTotal + displayTotal

    total.innerHTML = addTotal.toFixed(2)
   
    console.log(billInput.value, display.innerHTML)
    console.log(typeof billTotal) 
    console.log(typeof displayTotal)
    console.log(typeof addTotal)
}

calculateTip()
billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)


total.addEventListener('total', calculateTotal)
calculateTotal()




// Try #1 
// function calculateTotal() {
//     const addTotal = parseInt(billInput.value) + parseInt(display.innerHTML)
//     total.innerHTML = addTotal

//     console.log(addTotal, "addTotal", display.value, billInput.value, parseInt(display.innerHTML))
// }

// Try #2
// function calculateTotal() {
//     // const addTotal = parseInt(billInput.value) + display.innerHTML
//     const billTotal = parseFloat(billInput.value)
//     const displayTotal = parseFloat(display.innerHTML)
//     const addTotal = billTotal + displayTotal

//     console.log(billInput.value, display.innerHTML)
//     console.log(typeof billTotal) 
//     console.log(typeof displayTotal)
//     console.log(typeof addTotal)
    
// }


// Try #3
// function calculateTotal() {
//     const totalBill = billInput.value
//     const totalTip = tipInput.value

//     const tipTotal = totalBill * totalTip / 100
//     total.innerHTML = tipTotal.toFixed(2)
    
// }
