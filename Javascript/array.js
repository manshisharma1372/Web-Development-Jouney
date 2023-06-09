
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