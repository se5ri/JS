/*
유사 배열 객체
*/

/**
 * 전달받은 배열의 모든 요소를 인덱스와 함꼐 출력한다
 * @param {*} arr
 */
function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

const colorArr = ["orange", "yellow", "green"];
colorArr.push("black");
printArr(colorArr);

/* 유사배열 객체
  -length 속성
  - 0부터 시작해서 1씩 증가하는 속성 추가 */
const arr = {
  length: 3,
  0: "orange",
  1: "yellow",
  2: "green",
  /**
   * 맨 끝에 지정한 elem 추가한다
   */
  push: function (elem) {
    //TODO this 배운 후에
    //호출은 하지만 값이 들어오진않음 (black)
    arr[arr.length] = elem;
    arr.length++;
  },
};

arr.push("black"); // 유사배열객체 X
arr.push("white");
printArr(arr);
printArr("이것은 문자열"); //문자열은 대표적인 유사배열객체이다.
