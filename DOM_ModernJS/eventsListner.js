
/*
document.addEventListener('click',function(){
    console.log(" I have clicked on the document");
} )


function print(){
    console.log("Hello ,mannu");
}

document.addEventListener('click',print);

//document.removeEventListener('click',print);  

const content=document.querySelector('#wrapper');

content.addEventListener('click',function(event){
    console.log(event);
})

let links=document.querySelectorAll('a');
let thirdlink=links[2];

thirdlink.addEventListener('click',function(event){
    event.preventDefault();
    console.log("YAY we prevented it");
})

*/




 let myDiv=document.createElement('div');

 function paraStatus(event){
    console.log('Para'+ event.target.textContent);
}

myDiv.addEventListener('click', paraStatus);

 for(let i=1;i<=100;i++){
    let newElement=document.createElement('p');
    newElement.textContent='This is Para'+i;

    myDiv.appendChild(newElement);
 }

 document.body.appendChild(myDiv);