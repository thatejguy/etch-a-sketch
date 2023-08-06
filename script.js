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
    container.innerHTML = ''
    let num = '';
    while (num === '') {
      num = prompt('Please enter the number you would like to change the grid size to: ', '');
      if (num > 100) {
        alert('Your number must be below 100.');
        num = '';
      } else if (num < 2) {
        alert('Your number must be 2 or greater.');
        num = '';
      } else if (isNaN(num) === true) {
        alert('You need to enter a number.');
        num = '';
      } else {
        console.log('Hello there!');
      }
    }
    createDivs(num);
  })
}

//call functions
createDivs(16);
getSize();



