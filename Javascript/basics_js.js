console.log("lets start");

//object creation


//factory function


/*
function createRectangle(len,bre)
{
    return rectangle1={
        length: len,
        breadth: bre,
    
        draw:function(){
            console.log("drawing rectangle");
        }
    };
   // return rectangle1;
}

let recobj1=createRectangle(5,4);
let recobj2=createRectangle(8,2);
let recobj3=createRectangle(3,9);
console.log(recobj1.length); 
*/

//constructor function

function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log("drawing new rectangle");
    }
}

//obk creation using constructor


/*
let recobj4=new Rectangle(2,4);
//changing prop
recobj4.breadth=6;
recobj4.length=7;
//adding prop
recobj4.color="yellow";
//del prop
delete recobj4.color;
*/

/*
let a=10;
let b=a;
a++;
console.log(a);
console.log(b);

let x={value:5};
let y=x;
x.value=8;
console.log(x.value);
console.log(y.value);
*/



//loop

/*
let rectangle={
    length:2,
    breadth:4,
};

//for in loop
for(let key in rectangle){
    console.log(key,rectangle[key]);
}
 

//for of loop-->only on iterables

for(let key of Object.entries(rectangle)){
    console.log(key);
}

if('length' in rectangle){
    console.log('present');
}
else{
    console.log('absent');
}
*/



//cloning


//iteration
let src={value:10,
age:21};
let dest={};
for(let key in src){
    dest[key]=src[key];
}

//assign

let desti=Object.assign({},src);

//spread
let destin={...src};