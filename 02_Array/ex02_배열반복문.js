// 배열에 저장된 데이터를 반복문으로 출력해보기!

let nameList = ['양세영', '임경남', '주미리'];

// 1. for문
for(let i =0; i<nameList.length; i++){
    console.log(nameList[i]);
}


// 2. for of 문
for(let i of nameList){
    console.log(i);
}

let foodList = ['양꼬치', '꿔바로우', '옥수수온면']

for(let i of foodList){
    console.log(i);
}


// 3. forEach문
let colorList = ['초록', '파랑', '보라']

colorList.forEach((element, index) => {
    console.log(index, element);
})