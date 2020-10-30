function createSquare(n) {
    let square = document.createElement('div');
    square.style.height = `${n}%`;
    square.style.width = `${n}%`;
    square.className = 'gridSquare';
    return square;
}

function drawSquares (gridSize, squareSize) {
    for (i = 0; i < (gridSize ** 2); i++) {
            let square = createSquare(squareSize);
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
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#000'; })
    }       
}

function colors() {
    let squares = document.querySelectorAll('.gridSquare');
    for (let square of squares) {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomRGB(); })
    }
}

function shades() {
    let squares = document.querySelectorAll('.gridSquare');
    for (let square of squares) {
        square.addEventListener('mouseover', () =>{
            currentShade = square.style.backgroundColor; 
            console.log(currentShade);
            let r = currentShade.slice(4, 6);
            let g = currentShade.slice(8, 10);
            console.log(`${r} ${g}`);
        });
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
colors();


clearBtn.addEventListener('click', clearSquares);
gridBtn.addEventListener('click', resetGrid);
etchBtn.addEventListener('click', etch);
colorBtn.addEventListener('click', colors);
shadeBtn.addEventListener('click', shades);

