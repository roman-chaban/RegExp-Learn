'use strict';

const phoneNumber = '+380-637-05-60-82';

const _reg = /\+.8/;

const _str = ' Hello world, hello';

const _regExp = /^\sHello........hello$/;

const result = regExp.test(_str);

const time = `13:10
14:20
15:30`;

const regExp2 = /\d\d:\d\d/g;

const greet = 'I love JavaScript';

const regExp3 = /\b\d\d\b/g;

console.log(phoneNumber.match(regExp3));

let tag = prompt('Choose your tag', 'article');

const result_ = new RegExp(`<${tag}>`);

console.log(result_);

let str_ = 'I love JavaScript';

let regExp_ = /LOve/gi;

console.log(regExp.test(str));

const phone = '+(380)-637-05-60-82';

const regExp1 = /\d/g;

console.log(phone.match(regExp).join(''));

const str1 = '1 b';

const strReg = /\d\s\w/;

console.log(str1.match(strReg)[0]);

const str2 = 'Where is CSS4?';
const reg2 = /.....\D/gi;
console.log(str2.match(reg)[0]);

let str3 = "+1(703)-123-45-67";

const reg = /\D/gi;

console.log(str3.replace(reg, ''));

const str4 = /...4/i;
console.log('css4'.match(str4)[0].toUpperCase());

const someStr = '1 - 5';

const regExp = /\d\s-\s\d/g;

console.log(someStr.match(regExp)[0]);

