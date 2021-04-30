//start task 1

let number = [1, 2, 3, 4, 5];
let form = document.querySelector('.form__task1')
let numberArray = document.querySelector('.numberArray');

form.onsubmit = function (evt) {
    evt.preventDefault();
    let step = this.number.value;
    for (i = 0; i < step; i++) number.unshift(number.pop());
    numberArray.textContent = '[' + number.join() + ']';
    console.log(number);
    return false;
};
//end task 1
//start task 2

let string1 = document.querySelector('.string1')
let string2 = document.querySelector('.string2')

const finder = (string1, string2) => {
    arr = [];
    string1.split('').reduce((last,item)=>{
        if (string2.indexOf(`${last}${item}`) !== -1) {
            arr.push(`${last}${item}`);
            return `${last}${item}`;
        }
        else return item;
    }, '');
    return arr.sort((a, b)=>b.length-a.length)[0]
    console.log()
}