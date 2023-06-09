
//creation
let numbers=[1,4,5,7];
console.log(numbers);

//insertion
 numbers.push(9);
 console.log(numbers);

 numbers.unshift(1);
 console.log(numbers);

 numbers.splice(2,0,'a','b','c');
 console.log(numbers);

 //searching
 console.log(numbers.indexOf(5));   //6
 console.log(numbers.indexOf(20));  //-1

 if(numbers.indexOf(5) != -1){
    console.log("present");
 }

console.log(numbers.includes(5));


let courses=[
    {no:1, naam:"manshi"},
    {no:2, naam:"sharma"}
];
console.log(courses);

console.log(courses[0]);

//let course=courses.find(function(course){

//    return course.naam=='manshi';
//})

//console.log(course);

let course=courses.find(course=>course.naam=== "sharma");
console.log(course);


//removing

let arr=[1,2,3,4,5];
console.log(arr);
//end
arr.pop();
console.log(arr);

//begin
arr.shift();
console.log(arr);

//midl
arr.splice(2,1);
console.log(arr);


//emptying an array

let brr=[1,2,3,4,5];
let crr=brr;
console.log(brr);
//brr=[];
brr.length=0; 
console.log(brr);
console.log(crr);  //still exist


//combining

let first=[1,2,3];
let second=[4,5,6,7,8];
let combined=first.concat(second);
console.log(combined);

//slice
let ans=combined.slice(2,5);
console.log(ans); 

//spread

let a=[10,20,30,40];
let b=[50,60,70,80];
let c=[...a,'a',...b,'c'];
console.log(c);

//copy
let another=[...combined];
console.log(another);

let x=[9,8,7,6,5,4];
for(let value of x){
    console.log(value);
}

x.forEach(function(number){
    console.log(number);
})




//joining array

let num=[10,20,30,40,50];

const joined=num.join(" #   ");
console.log(joined);


//sorting an array

let myarr=[4,5,8,6,3,1,7];
myarr.sort();
console.log(myarr);

//reversing array
myarr.reverse();
console.log(myarr);

//filtering arr

let n=[1,4,-9,-8,5];
let ab= n.filter(function(val){
    return val>=0;
})
console.log(ab);



//mapping an array
let m=[1,2,3,4,5];

let items=m.map(function(val){
    return 'student_no '+val;
})

console.log(items);
