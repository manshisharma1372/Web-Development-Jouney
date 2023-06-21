
//callback function


//synch single threaded 

//callback fn gives us  power of asynch
setTimeout(function(){
    console.log("timer");
},5000
);

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
})


/*
var count=0;
document.getElementById("clickMe").addEventListener("click",
function xyz(){
    //alert("clicked");
    console.log("button clicked",++count)
});
*/
function attachEventListener(){
    let count=0;
document.getElementById("clickMe").addEventListener("click",
function xyz(){
    //alert("clicked");
    console.log("button clicked",++count)
});
}

attachEventListener();