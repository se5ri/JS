"use strict";
(() => {
    // T가 아닌 식별자 규칙 따르는 아무 문자나 사용 가능하지만, 관례적으로 Type의 첫글자 T 사요
    function echo(msg) {
        return msg;
    }
    console.log(echo("hello"));
    console.log(echo(100));
    //console.log(echo<boolean>(true)); // 제약 조건으로 쓸 수 없다.
    // 주로 내장할수를 사용하기 위헤서 조건을 해둔다.
    const str = echo("hello");
    const num = echo(123.456);
    console.log(str.toUpperCase(), num.toFixed(2)); // toFixed: 소수 둘째자리까지 보여줌
    function echo2(msg) {
        return msg;
    }
    //echo2<number>(100); // length 속성이 없음
    const str2 = echo2("hello");
    const num2 = echo2([10, 20]);
    console.log(str2.length, num2.length);
})();
