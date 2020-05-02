console.log("main.js");

// Get canvas refs
var c = document.getElementById("mainCanvas");
var ctx = c.getContext("2d");

// Create variables for canvas dimensions
var cWidth = 15*13;
var cHeight = 15*21;

c.width = cWidth;
c.height = cHeight;

// Colors for filling canvas
var cRed, cGreen, cBlue;

// On slider change, adjust canvas color
var redSlider = document.getElementById('redRange');
var greenSlider = document.getElementById('greenRange');
var blueSlider = document.getElementById('blueRange');

redSlider.addEventListener('input', redChange, false);
greenSlider.addEventListener('input', greenChange, false);
blueSlider.addEventListener('input', blueChange, false);

function redChange() {
    cRed = Math.floor(redSlider.value/100*255);
    drawExample();
}

function greenChange() {
    cGreen = Math.floor(greenSlider.value/100*255);
    drawExample();
}

function blueChange() {
    cBlue = Math.floor(blueSlider.value/100*255);
    drawExample();
}

// Fill canvas with example color
function drawExample() {
    ctx.beginPath();
    ctx.fillStyle = "rgba(" + cRed + "," + cGreen + "," + cBlue + ")";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.stroke();
}

redChange();
greenChange();
blueChange();
