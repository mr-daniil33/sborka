const button_sum = document.getElementById('button-sum');
const button_sub = document.getElementById('button-sub');
const button_mul = document.getElementById('button-mul');
const button_div = document.getElementById('button-div');
const button_exp = document.getElementById('button-exp');
const button_hyp = document.getElementById('button-hyp');

import {sum, sub, multiply, division, exponentiation, hypotenuse, first_argument, second_argument} from './calc';

button_sum.addEventListener('click', function() {
    let a = +prompt("Введите первое число", "");
    let b = +prompt("Введите второе число", "");
    alert(sum(a,b));
});

button_sub.addEventListener('click', function() {
    let a = +prompt("Введите первое число", "");
    let b = +prompt("Введите второе число", "");
    alert(sub(a,b));
});

button_mul.addEventListener('click', function() {
    let a = +prompt("Введите первое число", "");
    let b = +prompt("Введите второе число", "");
    alert(multiply(a,b));
});

button_div.addEventListener('click', function() {
    let a = +prompt("Введите первое число", "");
    let b = +prompt("Введите второе число", "");
    alert(division(a,b));
});

button_exp.addEventListener('click', function() {
    let a = +prompt("Введите первое число", "");
    let b = +prompt("Введите второе число", "");
    alert(exponentiation(a,b));
});

button_hyp.addEventListener('click', function() {
    let a = +prompt("Введите первое число", "");
    let b = +prompt("Введите второе число", "");
    alert(hypotenuse(a,b));
});