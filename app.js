const container = document.querySelector('.container');
const button = document.getElementById('clear');
button.addEventListener('click', clearGrid);

addGrid(16);

function addGrid(base) {
    const itemNumber = base*base;
    for (i=0; i<itemNumber; i++) {
        const item = document.createElement('div');
        item.className = 'div';
        container.appendChild(item);
    }
    container.style.gridTemplateColumns = `repeat(${base}, 1fr)`;
    
    const gridElements = document.getElementsByClassName('div');
    for (i=0; i<gridElements.length; i++) {
        gridElements[i].addEventListener('mouseenter', changeColor);
    }
}

function changeColor(e) {
    const target = e.target;
    rgbValue1 = getRandomRGBValue();
    rgbValue2 = getRandomRGBValue();
    rgbValue3 = getRandomRGBValue();
    if(target.style.backgroundColor) {
        let newOpacity  = `${Number(target.style.opacity) + 0.1}`;
        target.style.opacity = newOpacity;
    } else {
        target.style.opacity = '0.1';
        target.style.backgroundColor = `rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3})`;
    }
}

function clearGrid() {
    const grid = document.querySelectorAll('.div');
    for(i=0; i<grid.length; i++) {
        grid[i].classList.remove('changeColor');
    }
    container.innerHTML = ('');
    addGrid(promptForNewGrid());
}

function promptForNewGrid() {
    let newGridNumber = (prompt('How many rows and columns do you want the new grid to be?', '16'));
    newGridNumber = Number(newGridNumber);
    console.log(newGridNumber);
    if (newGridNumber !== NaN && newGridNumber > 0) {
        return newGridNumber;
    } else {
        promptForNewGrid();
    }
}

function getRandomRGBValue () {
    return Math.floor(Math.random() * (256));
}

