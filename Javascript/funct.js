//console.log("kya haal");


//function call
run();  



//function declaration 
 function run(){
    console.log("running");
 }




 //named    assignment function
 let myfunc=function walk(){
    console.log("walking");
 };

 myfunc();

 let myfunc2=myfunc;
 myfunc2();




 //anonymous function assignment

 let m=function(){
    console.log("listening");
 };
 m();




//example

function sum(a,b){
    console.log(arguments);
    return a+b;
}

console.log(sum(2,4));




//dynamic use of function

function sumnew(a,b){
    let total=0;
    for(let value of arguments ){
        total+=value;
    }
    return total;
}

let ans=sumnew(1,2,3,4,5);
console.log(ans);







//rest operator

function sum2(num,...args){  // num=1
    console.log(args);
}
sum2(1,23,4,5,6);






//default parameter

function simpleInterest(p,r=5,t=10){
    return (p*r*t)/100;
}

console.log(simpleInterest(1000,8));





/*
let person={
    fname: "manshi",
    lname:"sharma"
};

console.log(person);

function print(){
    return `${person.fname}           ${person.lname}`;
}
console.log(print());
*/







//getter setter

let person={
    fname: "manshi",
    lname:"sharma",

    get fullName(){
        return `${person.fname}       ${person.lname}`;
    },

    set fullName(val){

        if(typeof val !== String){
            throw new Error('value must be string');
        }
        let parts=val.split(" ");
        this.fname=parts[0];
        this.lname=parts[1];
    }

};

console.log(person.fullName);


//try and catch

try{
    person.fullName=1;
}
catch(e){
    alert(e);

}

console.log(person.fullName);    












//reduce method
let arr=[1,2,3,4];
let totalSum= arr.reduce((accumulator,currentValue) => accumulator+currentValue ,0);
console.log(totalSum);