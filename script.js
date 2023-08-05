//selectors
const container = document.querySelector('.container');
const clearButton = document.querySelector('.clearButton');
const gridButton = document.querySelector('.gridButton');

let grid = document.createElement('div');
//functions
function createDivs(num) {
  for (let i = 0; i < num * num; i++) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.width = `${500 / num}px`;
    grid.style.height = `${500 / num}px`;
    container.appendChild(grid);
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = 'black';
    });
    clearButton.addEventListener('click', () => {
      grid.style.backgroundColor = '#10aacc'
    });
  }
}

function getSize() {
  gridButton.addEventListener('click', () => {
    let number = prompt('please enter number', '');
    createDivs(number);
  })
}

//call functions
createDivs(16);
getSize();



