// const button = document.querySelector('button');
// const text = document.querySelector('p');
// const headerText = document.querySelector("h1");
// const list =  document.querySelector("ul");


// text.innerHTML = headerText.innerHTML;


// const infoFunc =()=>{
//     // text.innerHTML = "Hello";
//     // headerText.style.background="red";
//     // list.style.display = "none";
//     list.attributes[0].value = "view";
// }
// const infoFunc1 =()=>{
//     // list.style.display = "block";
//     list.attributes[0].value = "none";

// }

// button.addEventListener('click', infoFunc);
// button.addEventListener('dblclick', infoFunc1);




const  infoBtn = document.querySelector("#btn");


const infoData =()=>{
    // document.querySelector('h1').innerHTML = document.querySelector('.he1').firstChild.nodeValue; 
    // document.querySelector('h1').innerHTML = document.querySelector('.he1').childNodes[0].nodeValue; 
    // document.querySelector('h1').innerHTML = document.body.innerHTML; 
    // document.querySelector('h1').innerHTML = document.body.nodeName; 
    // document.querySelector('h1').innerHTML = document.querySelector('.he1').nodeType; 

    // const h4 = document.createElement('h4');
    // const content = document.createTextNode("Qudret");    
    // h4.appendChild(content);

    // document.querySelector('body').appendChild(h4);

     const h4 = document.createElement('h4');
    const content = document.createTextNode("Qudret");    
    h4.appendChild(content);

    const h1n = document.querySelector("h1");
    document.querySelector("body").replaceChild(h4,h1n);
    // document.querySelector('body').insertBefore(h4,h1n);
    // h1n.removeChild()
    // document.querySelector('body').removeChild(h1n)

    

}

infoBtn.addEventListener('click', infoData)