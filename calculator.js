function getFirstNumber() {
    const firstNumberInput = Number(document.getElementById('oneNumber').value);
    console.log(firstNumberInput);
    return firstNumberInput;
}

function clearFirstInput() {
    document.getElementById('oneNumber').value = "";
}



function getSecondNumber() {
    const secondNumberInput = Number(document.getElementById('twoNumber').value);
    console.log(secondNumberInput);
    return secondNumberInput;
}

function clearSecondInput() {
    document.getElementById('twoNumber').value = "";
}



function addTogether() {
    let number1 = getFirstNumber();
    let number2 = getSecondNumber();
    clearFirstInput();
    clearSecondInput();
    document.getElementById('derivation-add-together').innerHTML = number1 + '+' + number2 + '=' + (number1 + number2);
}

function clearResult() {
    document.getElementsByClassName('clear-result')[0].innerHTML = "";
    console.log();
}

function subtract() {
    let number1 = getFirstNumber();
    let number2 = getSecondNumber();
    clearFirstInput();
    clearSecondInput();
    document.getElementById('derivation-subtract').innerHTML = number1 + '-' + number2 + '=' + (number1 - number2);
}

function divide() {
    let number1 = getFirstNumber();
    let number2 = getSecondNumber();
    clearFirstInput();
    clearSecondInput();

    if (number1 == '0') {
        alert('делить на 0 нельзя');
    } else if (number2 == '0') {
        alert('делить на 0 нельзя');
    } else {
        document.getElementById('derivation-divide').innerHTML = number1 + '/' + number2 + '=' + (number1 / number2);
    }

}

function multiply() {
    let number1 = getFirstNumber();
    let number2 = getSecondNumber();
    clearFirstInput();
    clearSecondInput();
    document.getElementById('derivation-multiply').innerHTML = number1 + '*' + number2 + '=' + (number1 * number2);
}