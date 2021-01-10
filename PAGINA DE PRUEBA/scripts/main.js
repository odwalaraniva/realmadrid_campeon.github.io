let image = document.querySelector('img');

image.onclick=function(){
    let mysrc=image.getAttribute('src');
    if(mysrc==='images/Champions13.jpg'){
        image.setAttribute('src','images/champions13.png');
    }
    else {
        image.setAttribute('src','images/Champions13.jpg');
    }
}

let button =document.querySelector('button');
let heading = document.querySelector('h1');

function setusuer() {
    let nombre = prompt ('Por favor, ingresa tu nombre.');
    if(!nombre) {
        setusuer();
    }else{
    localStorage.setItem('name',nombre);
    heading.textContent='El Rey de Europa, '+ nombre}
}

if(!localStorage.getItem('name')) {
    setusuer();
}
else {
    let storedname = localStorage.getItem('name');
    heading.textContent='El Rey de Europa, '+ storedname;
}

button.onclick=function() {
    setusuer();
}




