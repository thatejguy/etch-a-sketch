//selectors
const container = document.querySelector('.container');

//stuff
function createDivs(num) {
  for (let i = 0; i < num * num; i++) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
  }
}

createDivs(16);



