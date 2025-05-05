(() => {
  /*
기본 데이터 타입 - Number, String, Boolean, undefined, null
*/

  // number
  let num: number = 100;
  let floatNum: number = 3.14;

  //string
  let s1: string = "single quote";
  let s2: string = "double quote";

  //boolean
  let b1: boolean = true;
  let b2: boolean = false;

  //type: undefined, value:undefined
  let emptyVal: undefined;

  //type: object, value: null
  let nullVal: null = null;

  console.log(num, floatNum, s1, s2, b1, b2, emptyVal, nullVal);
  console.log(
    typeof num,
    typeof floatNum,
    typeof s1,
    typeof s2,
    typeof b1,
    typeof b2,
    typeof emptyVal,
    typeof nullVal
  );
})();
