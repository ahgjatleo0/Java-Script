// 내장객체 : 자바스크립트에서 제공하는 객체
// Array, Math, Date, ...

let today = new Date();
let yesterday = new Date(2023,4,6,0,0,0);
console.log('오늘 : ', today);
console.log('어제 : ', yesterday);

// 출력 형태
// oooo년 o월 o일 o요일,
// o시 o분 o초 입니다!

let tYear = today.getFullYear();
let tMonth = today.getMonth()+1; // 0~11로 반환
let tDate =  today.getDate();
let tDay = today.getDay(); // 0~6으로 반환
let tHour = today.getHours();
let tMinute = today.getMinutes();
let tSecond = today.getSeconds();


switch(tDay){
    case 0 : tDay = '일'; break;
    case 1 : tDay = '월'; break;
    case 2 : tDay = '화'; break;
    case 3 : tDay = '수'; break;
    case 4 : tDay = '목'; break;
    case 5 : tDay = '금'; break;
    case 6 : tDay = '토'; break;
}

// 요일 0~6 -> 일 ~ 토

console.log(`${tYear}년 ${tMonth}월 ${tDate}일 ${tDay}요일`);
console.log(`${tHour}시 ${tMinute}분 ${tSecond}초 입니다!⌚`);

