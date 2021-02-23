function starpattern(num){
    let str = "";
    for(let i=0;i<num;i++){
        for(let j=0;j<i;j++){
            str = str.concat("*")
        }
        str=str.concat("\n");
    }
    console.log(str);
}
starpattern(7);