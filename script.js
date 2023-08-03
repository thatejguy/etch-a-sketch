//selectors
const container = document.querySelector('.container');

//stuff
function makeGrid(rows, cols) {
  container.style.setProperty('grease', rows);
  container.style.setProperty('grease', cols);
  for (let i = 0; i < rows * cols; i++) {
    let div = document.createElement('div');
    div.innerText = (i + 1);
    container.appendChild(div).className = 'grid-item';
  }
}

makeGrid(16, 16);