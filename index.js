let x = 0;
let y = 0;
let teta = -Math.PI/4;
let a = 0;
let v = 0;
let r = 200;
let m = 10;
let atrito = 0.005;
let gravidade = 0.01

let gravity = document.getElementById('gravity');
let gravitySlider = document.getElementById('gravitySlider');
let friction = document.getElementById('friction');
let frictionSlider = document.getElementById('frictionSlider');
let mass = document.getElementById('mass');
let massSlider = document.getElementById('massSlider');
let length = document.getElementById('length');
let lengthSlider = document.getElementById('lengthSlider');

function setup(){
    createCanvas(600, 400).parent('sketch');
    background(0);
    stroke(255);
    cursor(CROSS)
}

function draw(){
    background(0);
    translate(300, 0);
    if(mouseIsPressed && mouseX > 0 && mouseX < 600 && mouseY > 0 && mouseY < 400){
        teta = Math.atan((mouseX-300)/mouseY);
        a = 0; v = 0;
    }
    if(teta > Math.PI/2){
        teta = Math.PI/2;
    }
    if(teta < -Math.PI/2){
        teta = -Math.PI/2;
    }
    x = r*Math.sin(teta);
    y = r*Math.cos(teta);
    fill(255);
    stroke(255);
    ellipse(x, y, m, m);
    ellipse(x, 400-m, m, m);
    ellipse(300-m, y, m, m);
    line(0, 0, x, y);
    a = (-gravidade/(r/100))*Math.sin(teta);
    v += a;
    v *= (1-atrito);
    teta += v;
}

function gravityHandler(){
    gravity.innerHTML = gravitySlider.value;
    gravidade = gravitySlider.value/1000;
}

function changeGravity(value){
    gravitySlider.value = parseInt(gravitySlider.value)+value;
    gravityHandler();
}

function frictionHandler(){
    friction.innerHTML = frictionSlider.value/10;
    atrito = frictionSlider.value/1000;
}

function changeFriction(value){
    frictionSlider.value = parseInt(frictionSlider.value)+value;
    frictionHandler();
}

function massHandler(){
    mass.innerHTML = massSlider.value;
    mass = massSlider.value;
}

function changeMass(value){
    massSlider.value = parseInt(massSlider.value)+value;
    massHandler();
}

function lengthHandler(){
    length.innerHTML = lengthSlider.value;
    length = lengthSlider.value;
}

function changeLength(value){
    lengthSlider.value = parseInt(lengthSlider.value)+value;
    lengthHandler();
}