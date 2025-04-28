"use strict";
// 선택적 파라미터(optional parameter)
//타입을 지정안하면 기본적으로 any
// 타입스크립트는 기본적으로 순서와 갯수를 맞춰서 보내는게 디폴트 - 그때 선택적으로 피라미터를 설정한다면 ? 붙여주기
(() => {
    function user(name, age) {
        //뒤에 ? 는 "이 파라미터는 옵션이다"라는 뜻
        console.log(name, age);
    }
    user("하루", 5);
    user("용쌤");
})();
