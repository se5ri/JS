"use strict";
(() => {
    /*
  기본 데이터 타입 - Number, String, Boolean, undefined, null
  */
    // number
    let num = 100;
    let floatNum = 3.14;
    //string
    let s1 = "single quote";
    let s2 = "double quote";
    //boolean
    let b1 = true;
    let b2 = false;
    //type: undefined, value:undefined
    let emptyVal;
    //type: object, value: null
    let nullVal = null;
    console.log(num, floatNum, s1, s2, b1, b2, emptyVal, nullVal);
    console.log(typeof num, typeof floatNum, typeof s1, typeof s2, typeof b1, typeof b2, typeof emptyVal, typeof nullVal);
})();
