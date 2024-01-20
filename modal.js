const inputValue = document.querySelector('.input');
const inputValuePassword = document.querySelector('.input_p');
const button = document.querySelector('.submit');

button.addEventListener('click', function (){
if (!inputValue.value && inputValuePassword.value) {
     inputValue.classList.remove('input');
     inputValue.classList.add('isNotValid');
} else if (!inputValuePassword.value && inputValue.value) {
     inputValuePassword.classList.remove('input_p');
     inputValuePassword.classList.add('isNotValid');
} else if(!inputValuePassword.value && !inputValue.value) {
    inputValue.classList.remove('input');
    inputValuePassword.classList.remove('input_p');
    inputValuePassword.classList.add('isNotValid');
    inputValue.classList.add('isNotValid');
}
 });


function back () {
     window.history.back();
}


