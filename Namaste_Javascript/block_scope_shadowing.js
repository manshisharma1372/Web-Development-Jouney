

{
    // this is a block
    //compound statement
}

//ex
if(true){
    console.log("inside block");
    console.log("inside if");
}
var a=100; //shadowing
let b=5;
const c=4;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);


//illegal shadowing
/*
let x=20;
{
    var x=10;
}
*/

//legal
var x=20;
{
    let x=10;
    console.log(x);
}


//lexical scope

const t=20;
{
    const t=100;
    {
        const t=200;
        
    }
    
}
console.log(t);