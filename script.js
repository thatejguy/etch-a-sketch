//selectors
const container = document.querySelector('.container');

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
    })
  }
}

function clearGrid() {
  grid.style.backgroundColor = 'white';
}

//call functions
createDivs(56);



