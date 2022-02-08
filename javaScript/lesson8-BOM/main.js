// BOM

const text = document.querySelectorAll('span')[0];
const text1 = document.querySelectorAll('span')[1];
// text.innerHTML = window.innerWidth;
// text.innerHTML = screen.height;
// text1.innerHTML = window.innerHeight;
// text.innerHTML = screen.width;
// text1.innerHTML = window.innerWidth;
// text.innerHTML = screen.height;
// text.innerHTML = window.location.protocol;
// text.innerHTML = navigator.appName;
// text.innerHTML = navigator.appCodeName;
// text.innerHTML = navigator.platform;
// text.innerHTML = navigator.product;
// text.innerHTML = navigator.appVersion;
// text.innerHTML = navigator.userAgent;
// text.innerHTML = navigator.language;
text.innerHTML = navigator.onLine;
// window.alert("Hello");

const info=()=>{
    // window.location.assign("https://google.com")
    window.history.forward()
}
document.querySelector('button').addEventListener('click', info);