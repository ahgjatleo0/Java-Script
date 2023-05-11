// 화살표 함수 : 함수 표현식 형태 -> function 키워드 대신 ==>
// ()=>{}

// 함수 선언
const intro = () => {
    console.log('안녕하세요! 김성록입니다.');
}
intro();

// 매개변수
//  const intro2 = function(name) {
//     console.log(`개발원에서 비주얼을 맡은 ${name}입니다.😎`);
//  }
//  intro2('정유진')

const intro2 = name => console.log(`개발원에서 비주얼을 맡은 ${name}입니다.😎`);
intro2('정유진')

// 매개변수 + return문
// const intro3 = (name) => {
//     return `개발원에서 귀여움을 맡은 ${name}입니다.😘`
// }

const intro3 = name=> `개발원에서 귀여움을 맡은 ${name}입니다.😘`
intro3('정유진') // 출력 x
console.log((intro3('정유진')));

// 매개변수 1개 -> () 생략 가능
// 함수 실행문 1개 -> {}, return 키워드 생략 가능