

// localStorage.setItem("name","Reshad");
// // localStorage.removeItem("name");
// // localStorage.clear();
// localStorage.setItem("name","Reshad");
// localStorage.setItem("surname","Qarayev");
// localStorage.removeItem("name");

// localStorage.setItem('model',"BMW");
// document.querySelector("p").innerHTML = localStorage.getItem('model');



const lightBtn = document.querySelector('.light');
const darkBtn = document.querySelector('.dark');
const nav = document.querySelector('nav');

const lightFunc =()=>{
   const modeOne = nav.attributes[0].value = "navbar navbar-expand-lg navbar-light bg-light";
   localStorage.setItem('mode', modeOne);
}


const darkFunc =()=>{
    const modeTwo = nav.attributes[0].value = "navbar navbar-expand-lg navbar-dark bg-dark";
    localStorage.setItem('mode', modeTwo);
}

lightBtn.addEventListener('click',lightFunc);
darkBtn.addEventListener('click',darkFunc);
nav.attributes[0].value = localStorage.getItem('mode');