"use strict";
(() => {
    /*
    2차원 배열
    */
    const numbers = [
        [2, 4, 6, 8, 10],
        [3, 6, 9, 12],
        [4, 8, 12, 16],
        [5, 10, 15, 20],
    ];
    console.log(numbers[0]); //[ 2, 4, 6, 8 ]
    console.log(numbers[1]); //[ 3, 6, 9, 12 ]
    console.log(numbers[2]); //[ 4, 8, 12, 16 ]
    console.log(numbers[3]); // [ 5, 10, 15, 20 ]
    console.log(numbers[0][2]); //6
    console.log(numbers[3][2]); //15
    //모든 수의 합계
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const row = numbers[i]; //한줄
        for (let k = 0; k < numbers[i].length; k++) {
            console.log(row[k]);
            sum += row[k];
        }
    }
    console.log(sum);
})();
