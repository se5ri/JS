"use strict";
/*
대입 연산자 =, +=, -=, *=, /=, %=, **=
*/
(() => {
    let age = 20;
    let year = 3 + 2;
    console.log(age); //20
    console.log(year); //5
    age = age + year; //20+5
    /* 더 간단하게 쓰는 법
   age += year; */
    console.log(age, year); // 25, 5;
    age += year; //age = age+year=25+5=30
    console.log(age);
})();
