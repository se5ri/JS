"use strict";
// 함수에 타입 지정
(() => {
    function getCount(count) {
        //return count: // 타입에러
        return "Count: " + count;
    }
    //let result = getCount('20'); // 타입에러: number가 아니라 ' ' 는 string이기 때문에 에러가 난다
    let result /* :string */ = getCount(20);
    console.log(result);
})();
