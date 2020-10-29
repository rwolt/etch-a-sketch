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
    let squares = document.querySelectorAll('.gridSquare');
    for (let square of squares) {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#000'; })
    }       
}

function removeSquares () {
    let squares = document.querySelectorAll('.gridSquare');
    for (let square of squares) {
        container.removeChild(square);
    }
}    

function resetGrid() {
    let gridSize = Number(prompt('Choose a grid size between 1 and 100', 16));
    let squareSize = 100 / gridSize;
    removeSquares();
    drawSquares(gridSize, squareSize);
}

let clearBtn = document.querySelector('.clear-button');
let container = document.querySelector(".container");
resetGrid();

clearBtn.addEventListener('click', resetGrid);


