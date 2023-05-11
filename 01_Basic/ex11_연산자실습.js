let num1 =  Number(prompt('숫자를 입력해주세요'));
// --> prompt의 리턴타입은 String :  숫자형으로 변환해주어야 한다.
// num2 = num1%100;

// console.log('백의 자리 이하 버린 결과 >> ' + (num1-num2));


let resultNum = parseInt(num1/100)*100;
console.log(resultNum);