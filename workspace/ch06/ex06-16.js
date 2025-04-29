"use strict";
// 인터페이스 선언 병합
// ex06-15.ts 복사
// 왜쓰는데? 그냥 하나에 다하면 되잖아
// 외부 라이브러리에서 받은게 Todo 라고 할 때,
// 직접 수정이 불가능하니 확장 시키기 위해서 재선언을 한다.
(() => {
    const todo = {
        id: 1,
        title: "할일1",
        contents: "내용1",
        done: false,
        createdAt: new Date(),
    };
    console.log(todo);
})();
