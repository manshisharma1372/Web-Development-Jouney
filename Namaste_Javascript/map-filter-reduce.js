
//map
const arr=[5,1,3,2,6];

//transform arr


//1 double
function double(x){
    return x*2;
}

//2 double
function triple(x){
    return 3*x;
}



const output= arr.map(double);
const tri=arr.map(triple);

/*
const bin=arr.map(function binary(x){
    return x.toString(2);
});
*/


//arrow function
const bin=arr.map((x)=> x.toString(2));

console.log("array is",arr);
console.log("double",output);
console.log("triple",tri);
console.log("binary is",bin);









//filterfunction -- used to filter the value inside an array

//filter odd val
const arr2=[5,11,7,8,4,6];

function isOdd(x){
    return x%2;
      
}

function isEven(x){
    return x%2===0;
}

const oddNum=arr2.filter(isOdd);
const evenNum=arr2.filter(isEven);
console.log("odd number",oddNum);
console.log("even number",evenNum);

const greater=arr2.filter((x)=> x>4 );
console.log("greater then 4",greater);













//reduce()--used at a place u have to take all elm odf arr and come up with single value out of them

const arr3=[5,1,8,7,3,6,9];

//sum 

//normal func
function findSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

console.log("sum is",findSum(arr3));

//using reduce
let sumNew=arr3.reduce(function(acc,current){
    acc+=(current) ; 
    return acc;
},0);  //0 is initial val 
console.log("sum is",sumNew);





//max
function findMax(arr){
    let maxi=0;
    for(let i=0;i<arr.length;i++){
        if(maxi<arr[i]){
            maxi=arr[i];
        }
    }
    return maxi;
}
console.log("max is",findMax(arr3));

//using reduce

const maxi=arr3.reduce(function(maxim,curr){

    if(maxim<curr){
        maxim=curr;
    }
    return maxim;
},0)

console.log(maxi);






//examples

const users=[
    {firstName:"manshi" , lastName:"sharma", age:20},
    {firstName:"sachin" ,lastName:"singh",age:19 },
    {firstName:"rajesh" ,lastName:"kumar",age:8 },
    {firstName:"anil"   ,lastName:"kapoor",age:67 },
    {firstName:"rama" ,lastName:"bajrangi",age:8}
];

//list all full names

//map
const fullName = users.map((x)=>x.firstName+" "+x.lastName);
console.log(fullName);


//how many user having particular age

//reduce
const countUsersByAge= users.reduce(function(acc,curr){

    if(acc[curr.age]){
        acc[curr.age]++;
    }
    else{

        acc[curr.age]= 1
    }
    return acc;

},{})

console.log(countUsersByAge);


//find first name of all the user who's age is less than 30

const lessThirty=users.filter((x)=>x.age<30).map((x)=> x.firstName); //map running on o/p of this
console.log(lessThirty);


//using reduce???????????????