

let num1 = Number(prompt('시작할 숫자를 입력하시오.'));
let num2 = Number(prompt('마지막 숫자를 입력하시오.'));

let i, sum = (0,0);

for(i = num1; i <= num2; i++){
    sum += i;
}
console.log(sum);
