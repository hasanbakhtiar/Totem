// setInterval(func,time) -> daimi olaraq tərkaralanan quluşlu
// setTimeout(func,time) -> bir dəfə prosesi icra edən


// const newText=()=>{
//     const body = document.querySelector('body');    
//     const text =  document.createElement('p');
//     const content = document.createTextNode("Hello");
//     text.appendChild(content);
//     body.appendChild(text);
// }

// setInterval(newText,1000);
// setTimeout(newText,1000);

// const newTime=()=>{
// document.querySelector('p').innerHTML = new Date().getSeconds();
// }

// setTimeout(newTime,1000);

// TODO APP Start
// home work eger ici bashdursa reqemler gelmesin
// li-lerin buttonlari olsun onunla silinsin
let addToButton = document.querySelector('#addToDo');
let inputField = document.querySelector('#inputField');
let toDoContainer = document.querySelector('#toDoContainer');

const addElement = ()=>{
let paragraph = document.createElement('li');
paragraph.innerHTML = inputField.value ;
let data = toDoContainer.appendChild(paragraph);
inputField.value = "";

paragraph.addEventListener('click',()=>{
    paragraph.style.textDecoration = 'line-through';
})

paragraph.addEventListener('dblclick',()=>{
    toDoContainer.removeChild(paragraph);
})

}

addToButton.addEventListener('click', addElement);
 


// TODO APP End


const btn = document.querySelector('#b');

const eventA=(e)=>{
e.preventDefault();
}

btn.addEventListener('click', eventA)