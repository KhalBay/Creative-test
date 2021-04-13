let Number = [1,2,3,4,5];
let form = document.querySelector('.out_arr')
let input = document.querySelector('.input_N');
let numberArray = document.querySelector('.numberArray');

form.onsubmit = function (evt) {
    evt.preventDefault();

    Number = Number.slice(-input).concat(Number);
    numberArray.textContent = '[' + Number;
}

