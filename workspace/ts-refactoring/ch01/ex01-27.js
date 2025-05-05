"use strict";
(() => {
    /*
    배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
    */
    const arr = [10, 20, 30, 40];
    // 베열의 모든 요소 출력 (for)
    console.log("for");
    for (let i = 0; i < arr.length; i++) {
        //i=0, i=1, i-2 경우에 for문이 실행됨
        const elem = arr[i]; //arr[0],arr[1],arr[2]
        console.log(i, elem); //0 10 ,1 20 ,2 30
    }
    // 베열 모든 요소의 합계, 홀수의 합계, 짝수의 합계 구하기
    let sum = 0;
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] % 1 == 1) {
            oddSum += arr[i];
        }
        else {
            evenSum += arr[i];
        }
    }
    console.log("합계", sum);
    console.log("홀수합계", oddSum);
    console.log("짝수합계", evenSum);
    //for-of (반복문)
    for (let elem of arr) {
        console.log(elem);
    }
    //for, index를 사용해야 할 경우
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        console.log(elem);
    }
    //for-in을 사용할 경우
    for (let prop in arr) {
        console.log(prop, arr[prop]);
    }
    let hello = "world";
    console.log(hello);
})();
