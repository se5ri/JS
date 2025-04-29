"use strict";
(() => {
    // T가 아닌 식별자 규칙 따르는 아무 문자나 사용 가능하지만, 관례적으로 Type의 첫글자 T 사요
    function echo(msg) {
        return msg;
    }
    console.log(echo("hello"));
    console.log(echo(100));
    console.log(echo(true));
})();
