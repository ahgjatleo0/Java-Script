// 1. 랜덤 숫자 하나를 뽑아준다.
// 난수 생성 : Math.random() --> 0~1 사이
// 소수점 이하 버림 : Math.floor()
let ranNum = Math.floor(Math.random()*100 + 1);
console.log(ranNum);

// 2. 사용자로부터 숫자를 입력받는다.


// 3. 랜덤 숫자와 입력 숫자를 비교하여 결과를 보여준다.
//    -> 랜덤 < 입력 : '입력한 숫자보다 작은 수입니다.'
//    -> 랜덤 > 입력 : '입력한 숫자보다 큰 수입니다.'
//    -> 랜덤 = 입력 : '정답입니다. 축하합니다! ❣'
while(true){
    let answer = Number(prompt('숫자를 입력하시오.'));
    if(answer > ranNum){
        alert(`입력한 숫자보다 작은 수 입니다.`);
    }else if(answer< ranNum){
        alert(`입력한 숫자보다 큰 수 입니다.`);
    }else{
        alert(`정답입니다. 축하합니다🎉`);
        break;
    }
    

}