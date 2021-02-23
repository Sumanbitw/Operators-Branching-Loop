function fact (num){
    let fact1=1;
    for(let i=1;i<=num;i++){
        fact1 = fact1 * i;
    }
    console.log(fact1);
}
fact(6);