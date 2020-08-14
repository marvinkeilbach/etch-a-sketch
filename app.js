const container = document.querySelector('.container');
const clearButton = document.getElementById('clear');
const eraseButton = document.getElementById('erase');
clearButton.addEventListener('click', clearGrid);
eraseButton.addEventListener('click', eraseGrid);

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
    container.innerHTML = ('');
    addGrid(promptForNewGrid());
}

function eraseGrid() {
    let gridBase = document.getElementsByClassName('div').length;
    gridBase = Math.sqrt(gridBase);
    container.innerHTML = ('');
    addGrid(gridBase);  
}

function promptForNewGrid() {
    let newGridNumber = 0;
    while (isNaN(newGridNumber) || newGridNumber === 0) {
        newGridNumber = prompt('How many rows and columns do you want the new grid to be?', '16');
        newGridNumber = Number(newGridNumber);
    }
    return (newGridNumber);
}

function getRandomRGBValue () {
    return Math.floor(Math.random() * (256));
}

