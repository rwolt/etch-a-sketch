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
    clearSquares();
    let squares = document.querySelectorAll('.gridSquare');
    for (let square of squares) {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#000'; })
    }       
}

function colors () {
    let squares = document.querySelector('.gridSquare');
    clearSquares();
    for (let square of squares) {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomRGB(); })
    }
}

function randomRGB () {
    let hue = Math.floor(Math.random() * 360) + 1;
    let saturation = 100;
    let lightness = 50;
    let color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    return color;
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
let container = document.querySelector(".container");
resetGrid();
etch();


clearBtn.addEventListener('click', clearSquares);
gridBtn.addEventListener('click', resetGrid);
etchBtn.addEventListener('click', etch);
colorBtn.addEventListener('click', colors);

