let errorMessage = document.getElementById('errorMessage');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const phone = document.getElementById('number-phone');
const email = document.getElementById('email');
const password = document.getElementById('password');

function checkEmptyField() {
    document.getElementById('errorMessage').innerHTML = '';
    
    if (name.value == '') {
        errorMessage.innerHTML += 'Поле Имя не заполнено<br>';
    }

    if (surname.value == '') {
        errorMessage.innerHTML += 'Поле Фамилия не заполнено<br>';
    }

    if (phone.value == '') {
        errorMessage.innerHTML += 'Поле Номер телефона не заполнено<br>';
    }

    if (email.value == '') {
        errorMessage.innerHTML += 'Поле e-mail не заполнено<br>';
    }

    if (password.value == '') {
        errorMessage.innerHTML += 'Поле пароль не заполнено<br>';
    }
}

function checkLength(){
    if (password.value != '' && password.value.length <= 5){
        errorMessage.innerHTML += 'Ваш пароль слишком короткий<br>'; 
    }

    if (phone.value != '' && phone.value.length < 7){
        errorMessage.innerHTML += 'Ваш номер телефона слишком короткий<br>'; 
    }
}

function greetUser(){
    if(errorMessage.innerHTML == ''){
        alert('Добро пожаловать' + name.value);
    }
}

button.addEventListener("click", checkEmptyField);
button.addEventListener("click", checkLength);
button.addEventListener("click", greetUser); 

let inputs = document.querySelectorAll('input');
console.log (inputs);
