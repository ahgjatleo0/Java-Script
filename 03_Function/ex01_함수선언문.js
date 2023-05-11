 // 함수 : 특정 기능을 수행하는 소스 코드를 하나로 묶어서
 //        필요할 때마다 사용하기 위한 구조

 // 함수 선언
 function intro() {
    console.log('안녕하세요! 김성록입니다.');
 }

 intro();

 function intro2(name) {
    console.log(`개발원에서 비주얼을 맡은 ${name}입니다.😎`);
 }

 intro2('정유진')

 // 매개변수 + return문

function intro3(name){
    return `개발원에서 귀여움을 맡은 ${name}입니다.😘`
}
intro3('정유진') // 출력 x
console.log((intro3('정유진')));