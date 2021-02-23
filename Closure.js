function x(){
    let a = 7;
    console.log(a)
   function y(){
       let b=29;
        console.log(a,b);
        function z(){
            console.log(a,b)
        }
        z()
    }
    
    y();
}
x();

