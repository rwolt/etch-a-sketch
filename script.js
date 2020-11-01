function etchHandler (e) {
        e.target.style.backgroundColor = '#000'; 
}

function rgbHandler (e) {
        e.target.style.backgroundColor = randomRGB();
        e.target.style.filter = 'brightness(100%)';
}

function shadeHandler (e) {
        let n = e.target.getAttribute('count');
        n++;
        e.target.setAttribute('count', n);
        if (e.target.style.backgroundColor == '#000') {
            e.target.style.filter = 'brightness(0)';
        }
        else if (n > 0 && n <= 10) {
            e.target.style.filter = `brightness(${(10 - n) / 10})`;
        } else {
            e.target.style.filter = 'brightness(0)';
        }
}


function createSquare(n) {
    let square = document.createElement('div');
    square.style.height = `${n}%`;
    square.style.width = `${n}%`;
    square.className = 'gridSquare';
    square.setAttribute('count', 0);  
    return square;
}

function drawSquares (gridSize, squareSize) {
    for (i = 0; i < (gridSize ** 2); i++) {
            let square = createSquare(squareSize);
            square.id = i;
            container.appendChild(square); 
    }
}

function removeSquares () {
    let squares = document.querySelectorAll('.gridSquare');
    for (let square of squares) {
        container.removeChild(square);
    }
}    

function clearSquares(){
    let squares = document.querySelectorAll('.gridSquare');
    for (let square of squares) {
        square.style.backgroundColor = '';
    }
}

function etch () {
    let squares = document.querySelectorAll('.gridSquare');
    for (let square of squares) {
        square.removeEventListener('mouseover', shadeHandler);
        square.removeEventListener('mouseover', rgbHandler);
        square.addEventListener('mouseover', etchHandler);
    }    
}

function colors() {
    let squares = document.querySelectorAll('.gridSquare');
    for (let square of squares) {
        square.removeEventListener('mouseover', etchHandler);
        square.removeEventListener('mouseover', shadeHandler);
        square.addEventListener('mouseover', rgbHandler);
    }
}

function shades() {
    let squares = document.querySelectorAll('.gridSquare');
    for (let square of squares) { 
        square.removeEventListener('mouseover', rgbHandler);
        square.removeEventListener('mouseover', etchHandler);
        square.addEventListener('mouseover', shadeHandler);   
    }
}

function randomRGB () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r},${g},${b})`;
    return color
}


function resetGrid() {
    let gridSize = Number(prompt('Choose a grid size between 1 and 100', 16));
    while (gridSize < 1 || gridSize > 100) {
        gridSize = Number(prompt('Choose a grid size between 1 and 100', 16)); }
    let squareSize = 100 / gridSize;
    removeSquares();
    drawSquares(gridSize, squareSize);
}

let clearBtn = document.querySelector('.clear-button');
let etchBtn = document.querySelector('.etch');
let gridBtn = document.querySelector('.grid-size');
let colorBtn = document.querySelector('.rgb');
let shadeBtn = document.querySelector('.shading');
let container = document.querySelector(".container");

resetGrid();
etch();


clearBtn.addEventListener('click', clearSquares);
gridBtn.addEventListener('click', resetGrid);
etchBtn.addEventListener('click', etch);
colorBtn.addEventListener('click', colors);
shadeBtn.addEventListener('click', shades);

