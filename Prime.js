function prime(num){
    if(num===1){
        console.log("The number is not prime");
    }
    if(num===2){
        console.log("The number is prime");
    }
    for(let i=2;i<num/2;i++){
       
        if(num%i!==0){
            console.log("The number is prime");
        }else{
            console.log("The number is not prime");
        }
    }
}

prime(2);