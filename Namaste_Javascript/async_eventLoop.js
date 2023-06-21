 
 //example 1

 /*
 console.log("start");

 setTimeout(function cb(){
    console.log("callback");
 },5000);
 console.log("end");

 */






 //example 2
 /*
 console.log("start");

 document.getElementById("btn").addEventListener("click",function xyz(){
    console.log("callback");
 });
 console.log("end");
 */






 //ex 3

 console.log("start");
 setTimeout(function cbT(){
    console.log("CB timeout");
 },5000);

 fetch("https://api.netflix.com").then(function cbF(){
    console.log("CB Netflix and chill");
 });
 console.log("end");