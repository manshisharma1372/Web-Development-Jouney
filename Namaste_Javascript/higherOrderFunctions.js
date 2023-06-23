

//x is callback function 
function x()
{
    console.log("hey");
}

//y is higher order function
function y(x){
    x();
}

y(x);


//example

/*
 const radius=[3,1,2,4];

 const calculateArea= function (radius){
    const area=[];
    const circum=[];
    const diameter=[];
    for(let i=0;i<radius.length;i++){
        area.push(Math.PI*radius[i]*radius[i]);
        circum.push(2*Math.PI*radius[i]);
        diameter.push(2*radius[i]);
    }
    return {area,circum,diameter};
    
 };

 console.log(calculateArea(radius)); 
*/


 //modular prog
 const radius=[3,1,2,4];

 const area=function(radius){
    return Math.PI*radius*radius;
 };

 const circum= function(radius){
    return 2*Math.PI*radius;
 };

 const diameter= function(radius){
    return 2*radius;
 };


 const calculate= function (radius, logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
       output.push(logic(radius[i]));
    }
    return output;
    
 };

 console.log(radius.map(area));

 console.log(calculate(radius,area));
 //console.log(calculate(radius,circum));
 //console.log(calculate(radius,diameter));