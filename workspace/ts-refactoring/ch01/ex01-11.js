"use strict";
(() => {
    /*
  비교 연산자 >, >=, <, <=, ==, !=, ===, !==
  ture/false 값으로 판단
  */
    let a = 5;
    let b = 10;
    let c = "5";
    let d = 5;
    // > (크다)
    console.log(a > b); //5>10 거짓
    // < (작다)
    console.log(a < b); // 5<10 참
    // >= (크거나 같다)
    console.log(a >= d); //5>=5 참
    // <= (작거나 같다)
    console.log(a <= d); //5<=5 참
    //문자열 비교
    console.log(a == c); //동등 5=='5'= 5==5 (형 변환)
    console.log(a === c); //  number로 선언된 5와 문자로 선언된 string의 type이 다르기 때문에 false.
    console.log("ch05" > "ch01"); // 사전순으로 비교 페이지 순서라고 생각하면 됨
    console.log("ch12" > "ch2"); // 컴퓨터에서는 한글자씩 비교하기 때문에 ch12가 더 작다.
    //ch05,ch12,ch2,ch01 오름차순 정렬 순서
    //ch01,ch05,ch12,ch2 내림차순 정렬 순서
})();
