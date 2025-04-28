"use strict";
// 유니언 타입(union type)
(() => {
    // 문자열을 받아서 콘솔에 출력
    function logString(msg) {
        console.log(msg);
    }
    // 숫자를 받아서 콘솔에 출력
    function logNumber(msg) {
        console.log(msg);
    }
    logString("hello");
    logNumber(123);
    //msg가 여러타입을 혀용해야하는 경우 | (or) 라는 유니온 타입을 지정할 수 있다
    function log(msg) {
        console.log(msg);
    }
    log("hello");
    log(123);
    log(false);
})();
