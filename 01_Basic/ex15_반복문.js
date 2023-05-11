// 1. while문
let num1 = 0;
while(num1<3){
    console.log(num1);
    num1++;
}
let num2 =3;
while(true){
    console.log(num2);
    num2++;
    if(num2==6) break;    
}

// 2. do-while문
let num3 = 6;
do{
    console.log(num3);
    num3++;
}while(num3<9)

// 2.5 while문과 do while 문 비교
let num4 = 9;
while(num4<9){
    console.log(num4);
}
do{
    console.log(num4);
}while(num4<9)

// 3. for문
let num5 =10;

for(num5=10;num5<13;num5++){
    console.log(num5);
}