function max (a,b,c){
    if(a>b && a>c){
        console.log("The maximum number is : " , a);
    }else if(b>c && b>a){
        console.log("The maximum number is : ", b);
    }else {
        console.log("The maximum number is : ", c);
    }
}

max(8,23,17);