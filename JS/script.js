"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50,
    b: 'helklo'
};

obj.c = 'wdwqd';

obj.a = 10;
console.log(obj);
console.log(obj.c);

alert("Hello!");

const result = confirm("Are you here?");
console.log(result);

const answer = prompt("Are you at least 18?", "18");
console.log(typeof(answer));

const answers = [];
answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is your last name?', '');
answers[2] = prompt('How old are you?', '');

console.log(answers);

const category = 'toys';
console.log(`hello${category}`);


let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);
