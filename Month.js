function month(num){
    if(num==1 || num==3 || num==5 || num==7 || num==8 || num==10 || num==12 ){
        console.log("The number of days in a month is 31 days");
    }else if(num==2){
        console.log("The number of days in a month is 28 days");
    }else {
        console.log("The number of days in a month is 30 days");
    }
}
let num1 = prompt("Enter a month in terms of a number");

month(num1);