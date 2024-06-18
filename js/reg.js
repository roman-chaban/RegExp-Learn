'use strict';

const phoneNumber = '+(380)-637-05-60-82';

const regExp = /\d/g;

const regExp_2 = /\D/g;

const result_ = 'Two example: ' + phoneNumber.replace(regExp_2, '');

console.log(result_);

const result = phoneNumber.match(regExp).join('');

const finalResult = `Correctly phone number: ${result}`;

console.log(finalResult);

const str = 'I love HTML5';

const regExp_ = /\s\w\w\w\w\d/;

console.log(str.match(regExp_));


const newStr = 'Hello';

const exampleReg = /.ello/i;

console.log(newStr.match(exampleReg));


const newText = 'Hello Java Script';

const regText = /\bJava\b/;

console.log(newText.match(regText));