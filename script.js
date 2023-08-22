let isEraserOn = false; 
let currentColor = '#000000'; 

document.querySelector('#colorPicker').addEventListener('input', function(event) {
    currentColor = event.target.value; 
});

document.querySelector('.eraser').addEventListener('click', function() {
    isEraserOn = !isEraserOn;
    this.textContent = isEraserOn ? 'Disable Eraser' : 'Toggle Eraser';
});

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const content = document.createElement('div');
            content.addEventListener('mouseover', function() {
                if (isEraserOn) {
                    this.style.backgroundColor = 'white';
                } else {
                    this.style.backgroundColor = currentColor; 
                }
            });
            grid.appendChild(content);
        }
    }
}


function clearGrid() {
  while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
  }
}

function refreshGrid() {
  var size = prompt("How many boxes per side?");
  clearGrid();
  createGrid(size);
}



document.querySelector('.newGrid').addEventListener('click', refreshGrid);




   