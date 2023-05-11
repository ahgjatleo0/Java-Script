// 함수 표현식 : 익명 함수 형태로 함수 선언 -> 변수 참조
// function() -> 익명 함수 

 // 함수 선언
 const intro = function() {
    console.log('안녕하세요! 김성록입니다.');
 }

 intro();

 const intro2 = function(name) {
    console.log(`개발원에서 비주얼을 맡은 ${name}입니다.😎`);
 }

 intro2('정유진')

 // 매개변수 + return문

function intro3(name){
    return `개발원에서 귀여움을 맡은 ${name}입니다.😘`
}
intro3('정유진') // 출력 x
console.log((intro3('정유진')));