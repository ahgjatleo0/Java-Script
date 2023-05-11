// 배열 함수
let nameList = ['김성록', '조인성', '정유진', '이경진', '이민혁'];
console.log(nameList);

// 1. 마지막 인덱스 데이터 추가 : push()
nameList.push('가나다');
console.log('마지막 추가', nameList);

// 2. 마지막 인덱스 데이터 삭제: pup()
nameList.pop();
console.log('마지막 삭제', nameList);

// 3. 첫번째 인덱스 데이터 추가 : unshift()
nameList.unshift('가나다');
console.log('첫번째 추가', nameList);

// 4. 첫번째 인덱스 데이터 삭제 : shift()
nameList.shift();
console.log('첫번째 삭제', nameList);

// 5. 원하는 위치에 데이터 추가 또는 삭제 : splice()
// -> 추가
nameList.splice(1,0,'가나다', '라마바' )
console.log('splice 추가', nameList);

// -> 삭제
nameList.splice(2,2);
console.log('splice 삭제', nameList);