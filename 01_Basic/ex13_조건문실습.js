// 1. 사용자로부터 키와 몸무게를 입력받는다.
let height = Number(prompt('신장 입력'));
let weight = Number(prompt('체중 입력'));
console.log(height, weight);

// 2. 적정 몸무게 및 사용자 몸무게와의 차이를 구한다.
let normal = (height - 100) * 0.9;
let gap = Math.abs(weight - normal);



// 3. 조건에 따라 결과(초과, 미달, 정상)를 구한다.
let result = '';
if (gap > 0) {
    result = '초과한';
} else if (gap < 0) {
    result = '미달인';
} else {
    result = '정상인';
}

// 4. 형태에 맞춰 출력해준다. --> HTML문서내


document.write(`신장 : ${height}cm <br>
체중 : ${weight}kg <br>
적정 체중 : (${height}-100)X0.9 = ${normal}(kg) <br>
결과 : 적정 체중은 ${normal}kg이며,
현재 적정 체중에서 ${gap}kg ${result} 것을 알 수 있습니다. `);

