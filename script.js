//selectors
const container = document.querySelector('.container');

//stuff
function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < rows * cols; i++) {
    let div = document.createElement('div');
    container.appendChild(div).className = 'grid-item';
  }
}

makeGrid(16, 16);



