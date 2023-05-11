let num1 = '100';
let num2 = 200;

let sum = 0;
sum = parseInt(num1) + num2

// console.log('100과 200의 합 >>' + sum);

// Template Literals(템플릿 리터럴) -> 백틱(`)
// : 표현식/문자열 삽입, 여러 줄 문자열 등 다양한 기능을 제공
console.log(`${num1}과 ${num2}의 합 >> ${sum}`);

let userName = '김성록';
console.log(`안녕하세요.
반갑습니다.`);
console.log(`${userName}님 환영합니다.`);