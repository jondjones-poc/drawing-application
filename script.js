const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('color');
const increase  = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const sizeElement = document.getElementById('size');

let size = 20;
let color = 'black';
let x;
let y;
let isPressed = false;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;   
});

canvas.addEventListener('mouseup', () => {
    isPressed = false;
    x = null;
    y = null;   
});

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x1 = e.offsetX;
        const y1 = e.offsetY;   

        draw(x1, y1);
        drawLine(x, y, x1, y1);

        x = x1;
        y = y1;
    }
});

increase.addEventListener('click', () => {
    size++;
    sizeElement.innerHTML = size;
});

decrease.addEventListener('click', () => {
    size--;
    sizeElement.innerHTML = size;
});

colorPicker.addEventListener('change', (e) => {
    color = e.target.value;
});


clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const draw = (x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2); 
    ctx.fillStyle = color;
    ctx.fill();
}

const drawLine = (x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1); 
    ctx.lineTo(x2, y2); 
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}