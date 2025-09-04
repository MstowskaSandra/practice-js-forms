document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');
}

function setBoxShadow(element, colorInHex, opacity = 1) {
    const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;

    element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}


function getChannelColor(colorInHex, channelName) {
    let start;
    switch(channelName) {
        case 'red':
            start = 1;
            break;
        case 'green':
            start = 3;
            break;
        case 'blue':
            start = 5;
            break;
    }

    const channelColorHex = colorInHex.substr(start, 2);
    const channelColorDec = parseInt(channelColorHex, 16);

    return channelColorDec; 
}


const box = document.querySelector('.box');
const colorInput = document.querySelector('input[name="color"]');
const opacityInput = document.querySelector('input[name="opacity"]');

let currentColor = colorInput.value;
let currentOpacity = opacityInput.value / 100;

function handleColorChange(e) {
    currentColor = e.target.value;
    setBoxShadow(box, currentColor, currentOpacity);
}

function handleOpacityChange(e) {
    currentOpacity = e.target.value / 100;
    setBoxShadow(box, currentColor, currentOpacity);
}

colorInput.addEventListener('input', handleColorChange);
opacityInput.addEventListener('input', handleOpacityChange);

