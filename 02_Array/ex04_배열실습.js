let numList = [1, 2, 3, 4, 5, 6, 7, 8];
let oddList = [];
let oddCnt = 0;

for (let i of numList) {
    if (numList[i] % 2 != 0) {
        oddList[oddCnt] = numList[i];
        oddCnt++;


    } else {

    }

}
alert(`list에 들어있는 홀수는 ${oddList}이며, 총${oddCnt}개 입니다. `)