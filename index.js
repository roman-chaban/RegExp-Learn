'use strict';

const phoneNumber = '+380-637-05-60-82';

const reg = /\+.8/;

const str = ' Hello world, hello';

const regExp = /^\sHello........hello$/;

const result = regExp.test(str);

const time = `13:10
14:20
15:30`;

const regExp2 = /\d\d:\d\d/g;

const greet = 'I love JavaScript';

const regExp3 = /\b\d\d\b/g;

console.log(phoneNumber.match(regExp3));
