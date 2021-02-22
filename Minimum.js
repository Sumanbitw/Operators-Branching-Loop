function min (a,b,c){
    if(a<b && a<c){
        console.log("The minimum number is : ", a);
    }else if(b<c && b<a){
        console.log("The minimum number is : ",b);
    }else {
        console.log("The minimum number is : ",c);
    }
}

min(35,29,46);