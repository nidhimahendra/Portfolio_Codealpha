let text=[
"Web Developer",
"UI/UX Designer",
"Programmer"
];


let i=0;
let j=0;


function typing(){


if(j<text[i].length){

document.getElementById("typing").innerHTML += text[i][j];

j++;

setTimeout(typing,100);

}

else{

setTimeout(()=>{

document.getElementById("typing").innerHTML="";

j=0;

i++;

if(i==text.length)
i=0;


typing();


},1000);

}

}


typing();





document.getElementById("theme")
.onclick=function(){

document.body.classList.toggle("dark");

}