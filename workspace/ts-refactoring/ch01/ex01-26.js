"use strict";
(() => {
    /*
    배열 생성, 읽기, 쓰기
    */
    //생성자 함수를 이용해서 new Array만든다
    // const arr = new Array(1, 2, 3);
    const arr = [1, 2, 3]; //JSON표기법
    // 지정한 배열의 마지막 요소를 추가한다
    arr.push(10); //[ 1, 2, 3, 10 ]
    arr[4] = 20; //[ 1, 2, 3, 10, 20]
    arr[5] = 30; //[  1, 2, 3, 10, 20, 30 ]
    arr[1] = 100; //[ 1, 100, 3, 10, 20, 30 ]
    arr[9] = 200; //[ 1, 100, 3, 10, 20, 30, <3 empty items>, 200 ]
    //베열의 마지막에 새로운 데이터 추가 (arr[arr.length], arr.push())
    arr[arr.length] = 300; //[ 1, 100, 3, 10, 20, 30, <3 empty items>, 200, 300 ]
    arr.push(400); //arr[arr.length] 대신 push를 사용하는게 더 쉬움
    console.log("배열의 길이", arr.length);
    console.log("배열의 마지막 값", arr[arr.length - 1]);
    console.log(typeof arr, arr);
})();
