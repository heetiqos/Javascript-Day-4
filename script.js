//Basic Ex 1
function printInfo(){
let fname = document.getElementById("firstname").value;
let lname = document.getElementById("lastname").value;
let age = document.getElementById("age").value;
let select = document.getElementById("select").value;


let color = "red";
if(fname.length>5){
    color="green"
}

let backgroundcolor = "";
if (select=="webdeveloper") {
    backgroundcolor="purple"
} else if (select=="teacher"){
    backgroundcolor="yellow"
} else if (select = "doctor"){
    backgroundcolor="blue"
}

document.getElementById("output").style.color=color;

document.getElementById("output").style.backgroundColor = backgroundcolor;//Basic Exercise 2

//change background color of body into a random number with each click. Intermediate #2
let randomR =  Math.floor(Math.random()*256);
let randomG =  Math.floor(Math.random()*256);
let randomB =  Math.floor(Math.random()*256);
document.body.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

document.getElementById("output").innerHTML = fname + "  " + lname + "  " + age;

}

document.getElementById("btn").addEventListener("click",printInfo);

