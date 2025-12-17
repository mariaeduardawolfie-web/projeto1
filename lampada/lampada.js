const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');
const bgSmall = document.getElementById('bg-small');

function isLampBroken() {
    return lamp.src.includes('quebrada');
}

function changeBackground(state) {
    if (state === 'on') {
        bgSmall.src = "./img/whisper.jpeg";       
    } 
    else if (state === 'off') {
        bgSmall.src = "./img/white_man.jpeg";     
        
    } 
    else if (state === 'broken') {
        bgSmall.src = "./img/baixados.jpeg";     
    }
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = "./img/ligada.jpg";
        changeBackground("on");
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = "./img/desligada.jpg";
        turnOnOff.textContent = "Ligar";
        changeBackground("off");
    }
}

function lampBroken() {
    lamp.src = "./img/quebrada.jpg";
    changeBackground("broken");
}

function lampOnOff() {
    if (turnOnOff.textContent === "Ligar") {
        lampOn();
        turnOnOff.textContent = "Desligar";
    } else {
        lampOff();
    }
}

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);

changeBackground("off");
