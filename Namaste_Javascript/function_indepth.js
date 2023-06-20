
//function statement
a();  //ok
function a(){
    console.log("me");
}

//b();  //error typeError
//function expression
var b= function(){
    console.log("you");
}
b(); 
//diff between these two is hoisting




//anonymous function
//function (){

//}


//named function expression
var x=function xyz(){
    console.log(xyz);
}
x(); //cannot access it


//parameter
var n=function(param1 ,param2){
    console.log(param1);
}

//arguements
n(12,14);



//first class function

//1 we can pass function as an arg

var b=function(param8){
    var t=5;
 
    console.log("what on earth");
}

function newfun(){

    console.log(t);
}

b(newfun);


//2 we can return a func from a func

var o=function(param5){
    return function(){

    }
}
console.log(o());