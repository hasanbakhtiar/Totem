// Selector
// document.getElementsByTagName("p")[1].innerHTML = "JavaScript";
// document.getElementById("numberOne").innerHTML = "DOM";

// for (let i = 0; i <= 4; i++) {
// document.getElementsByTagName("p")[i].innerHTML = "JavaScript";
// }


// document.getElementsByClassName("box")[0].innerHTML = "JavaScript";
// document.getElementsByTagName('a')[0].attributes[0].value = "https://github.com";

// document.querySelector('a').innerHTML = "JS";
// document.querySelectorAll('.box')[1].innerHTML = "JS";

// const myFunc =()=>{
//     for (let index = 0; index < 100; index++) {
//         document.querySelectorAll("h1")[index].innerHTML = "JavaScript";
//     }
// }


// document.querySelector('button').addEventListener('click',myFunc);



const myFuncOne =()=>{
    document.querySelector('h1').innerHTML = "JavaScript";
    document.querySelector('h1').style.color = "red";
    document.querySelector('h1').style.background = "green";
}


const myFuncTwo =()=>{
    document.querySelector('h1').innerHTML = "DOM";
}


// document.querySelectorAll('button')[0].addEventListener('click', myFuncOne);
document.querySelectorAll('button')[0].addEventListener('mouseover', myFuncOne);
// document.querySelectorAll('button')[0].addEventListener('dblclick', myFuncTwo);
document.querySelectorAll('button')[0].addEventListener('mouseout', myFuncTwo);

const listFuncOne=()=>{
    document.querySelector(".listTwo").style.display = "block";
}
const listFuncTwo=()=>{
    document.querySelector(".listTwo").style.display = "none";
}
document.querySelector('.listOne').addEventListener('click', listFuncOne);
document.querySelector('.listOne').addEventListener('dblclick', listFuncTwo);
