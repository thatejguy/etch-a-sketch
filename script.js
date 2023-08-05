//selectors
const container = document.querySelector('.container');
const clearButton = document.querySelector('.clearButton');
const gridButton = document.querySelector('.gridButton');

//creates a grid of variable divs
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

//prompts the user for a number
function getSize() {
  gridButton.addEventListener('click', () => {
    let grid = document.querySelector('.grid')
    for (let i = 0; i < num * num; i++) {
      container.removeChild(grid)
    }
    let num = prompt('please enter number', '')
    createDivs(num);
  })
}

//call functions
getSize();



