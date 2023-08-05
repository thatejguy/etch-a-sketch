//selectors
const container = document.querySelector('.container');

//stuff
function createDivs(num) {
  for (let i = 0; i < num * num; i++) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.width = `${500 / num}px`;
    grid.style.height = `${500 / num}px`;
    container.appendChild(grid);
  }
}

createDivs(56);



