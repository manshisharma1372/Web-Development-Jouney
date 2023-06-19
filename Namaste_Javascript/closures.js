
function x(){
    var a=13;
    function y(){
        console.log(a);
    }
    return y;
}
var ans=x();
console.log(ans);
ans();   