'use strict';

//Задание 1 

let a = prompt('Введите первое число');
let b = prompt('Введите второе число');

function EvenNumbers(a, b) {
    for (let i = a; i < b; i++) {
        if (i % 2 === 0) {
            alert(i);
        }
    }
}
EvenNumbers(a,b);

//Задание 2

let i = 0;
while (i < 3){
    alert(`number ${i}`);
    i++;
}

//Задание 3
 
zad3 = function () { 
 
    let a = 0; 
 
    while (true) { 
        a = +prompt('Введите число, больше 10'); 
        if (a < 10) break; 
    } 
} 
 
// 4 задание 
 
zad4 = function () { 
 
    function min(a, b) { 
        if (a < b) return a; 
        return b; 
    } 
 
    alert(min(+prompt('Введите число a'), +prompt('Введите число b'))); 
} 
 
// 5 задание 
 
zad5 = function () { 
 
    let ask = (question, yes, no) => { 
        if (confirm(question)) yes() 
        else no(); 
    } 
    ask( 
        "Вы согласны?", 
        () => alert("Вы согласились."), 
        () => alert("Вы отменили выполнение.") 
    ); 
 
} 
 
// 6 задание 
 
zad6 = function () { 
 
    ageUser = +prompt('Введите ваш возраст'); 
 
    function checkAge(age) { 
        return age > 18 || confirm('Родители разрешили?'); 
    } 
 
    alert(checkAge(ageUser)); 
 
}