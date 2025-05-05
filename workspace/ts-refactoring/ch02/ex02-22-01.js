"use strict";
(() => {
    const todoList = [
        {
            id: 1,
            title: "JavaScript 공부",
            done: true,
        },
        {
            id: 2,
            title: "TypeScript 공부",
            done: false,
        },
        {
            id: 3,
            title: "JavaScript 프로젝트",
            done: false,
        },
        {
            id: 4,
            title: "React 공부",
            done: false,
        },
        {
            id: 5,
            title: "Final 프로젝트",
            done: true,
        },
    ];
    // 완료된 할일 목록(done이 true인 항목을 찾아 새 배열에 저장)
    let doneList = [];
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].done === true) {
            doneList.push(todoList[i]);
        }
    }
    console.log("완료된 할일 목록", doneList);
    // 남은 할일 목록(done이 false인 항목을 찾아 새 배열을 저장)
    let remainList = [];
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].done === false) {
            remainList.push(todoList[i]);
        }
    }
    console.log("남은 할일 목록", remainList);
    // 남은 할일 수(done이 flase일 경우 카운터 증가)
    let remainCount = 0;
    for (let i = 0; i < todoList.length; i++) {
        if (!todoList[i].done) {
            remainCount++;
        }
    }
    console.log("남은 할일 수", remainCount);
    // id=2인 할일(항목을 찾아 반환)
    let todo = null;
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === 2) {
            todo = todoList[i];
            break;
        }
    }
    console.log("id=2인 할일", todo);
    // id=3인 할일의 index(를 찾아 반환)
    let todoIndex = -1; //찾지 못한 경우 -1
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === 3) {
            todoIndex = i;
            break;
        }
    }
    console.log("id=3인 할일의 index", todoIndex);
    // 남은 할일이 하나라도 있는가? (done이 false인 항목이 았는지 검사)
    let hasTodo = false;
    for (let i = 0; i < todoList.length; i++) {
        if (!todoList[i].done) {
            hasTodo = true; // done이 ture이면, 남은 할일이 있음
            break;
        }
    }
    console.log("남은 할일이 하나라도 있는가?", hasTodo);
    // 할일이 모두 완료 되었는가? (모든 항목이 true인지 검사)
    let isAllDone = true;
    for (let i = 0; i < todoList.length; i++) {
        if (!todoList[i].done) {
            isAllDone = false; // done의 속성이 false이면, 모둔 완료 되자 않음
            break;
        }
    }
    console.log("할일이 모두 완료 되었는가?", isAllDone);
})();
