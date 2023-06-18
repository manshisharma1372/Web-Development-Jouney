
var a=10; //inside global space
function b(){// inside global space

    var x=10; //local space
}

console.log(window.a); //or 
console.log(a); //assuming it is in global space

console.log(x); // not present in global
console.log(this.a); //same thing