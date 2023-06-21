
console.log("start");

setTimeout(function cb(){
    console.log('timeout');
},5000);

console.log("end");

//milllion

let startDate=new Date().getTime();
let enddate=startDate;
while(enddate< startDate+10000)
{
    enddate=new Date().getTime();

}

console.log("while expires");