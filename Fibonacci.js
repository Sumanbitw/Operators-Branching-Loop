function fib(num){
    let a = 0;
    let b = 1;
    let sum;
    for(let i=0;i<num;i++){
        sum = a + b;
        a=b;
        b=sum;
        console.log(sum);
    }
}
console.log(0);
console.log(1);
fib(7);