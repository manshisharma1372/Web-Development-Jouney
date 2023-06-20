

/*
function x(){
    var a=13;
    function y(){
        console.log(a);
    }
    return y;
}
var ans=x();
console.log(ans);
ans();   

*/

//interview que


 /*
 function x(){

    var i=1;
    setTimeout(function(){
        console.log(i);
    }, 3000);

    console.log("manshi");
 }
 x();
*/




//usin let
/*
function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }

    console.log("hello");
}
x();
*/


//using var only

function x(){
    for(var i=1;i<=5;i++){
        function close(x){

            setTimeout(function(){
                console.log(x);
            },x*1000);
        }

        close(i);
    }
    console.log("mannu");
}
x();

