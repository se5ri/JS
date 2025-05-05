"use strict";
(() => {
    /*
    반복문 - for문
    */
    /* let sum = 0;
    let i = 1;
    while (i <= 10) {
      console.log(i);
      sum += i;
      i++;
    }
    console.log("합계:", sum); */
    sum = 0;
    for (let i = 1; i <= 10; i++) {
        //초기화, 조건식, 증감식
        sum += i; // 실행할 코드
    }
    console.log(sum);
    // 1부터 10까지 출력
    sum = 0;
    for (let i = 1; i <= 10; i++) {
        //초기화, 조건식, 증감식
        sum += i; // 실행할 코드
        console.log(i);
    }
    //1~10까지 홀수의 합계
    sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 1) {
            sum += i;
        }
    }
    console.log(sum);
    //1~10까지 짝수의 합계
    sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    console.log(sum);
    // 1부터 10까지 홀,짝수의 합계
    oddSum = 0;
    evenSum = 0;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            //짝수조건
            evenSum += i;
        }
        else {
            oddSum += i; //짝수 외(홀수)
        }
    }
    console.log("짝수합계:", evenSum);
    console.log("홀수합계:", oddSum);
})();
