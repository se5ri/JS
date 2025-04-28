"use strict";
// 인터페이스 상속
(() => {
    const todo1 = {
        title: "할일1",
        content: "내용 1",
    };
    console.log("등록", todo1);
    const todo2 = {
        id: 1,
        title: "할일1",
        content: "내용 1",
        done: false,
    };
    console.log("할 일 상세 조회", todo2);
})();
