const rowInput = document.getElementById('row-input');
const speedInput = document.getElementById('speed-input');
const colorInput = document.getElementById('color-input');
const showPyramidBtn = document.getElementById('show-pyramid-btn');
const resetBtn = document.getElementById('reset-btn');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const restartBtn = document.getElementById('restart-btn');
const pyramidContainer = document.getElementById('pyramid-container');

const firstScreen = document.getElementById('first-screen');
const secondScreen = document.getElementById('second-screen');
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');

const errorMessage = document.querySelector('.error-message');
const errorText = document.querySelector('.error-message span');

let intervalID = null;
let isRunning = false;
let currentRowIndex = 0;
let allRows = [];
let isIntervalRunning = false;

themeBtn.addEventListener("click", () => {
    const html = document.documentElement;

    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        themeIcon.classList.remove('bi-sun');
    }else {
        html.classList.add('dark');
        themeIcon.classList.add('bi-sun');
    }
});

rowInput.addEventListener("input", () => {
    let rowInputValue = parseInt(rowInput.value,10);
    
    if(rowInputValue < parseInt(rowInput.min)){
        rowInputValue = parseInt(rowInput.min);

        errorMessage.classList.add('show');
        errorText.innerText = `min row limit is ${rowInputValue}`; 
    
    }else if(rowInputValue > parseInt(rowInput.max)){
        rowInputValue = parseInt(rowInput.max);
        rowInput.value = rowInputValue;

        errorMessage.classList.add('show');
        errorText.innerText = `max row limit is ${rowInputValue}`; 
        
    }else {
        errorMessage.classList.remove('show');
    }
});

showPyramidBtn.addEventListener("click", () => {
    const rows = Number(rowInput.value);

    if(rows >=1 && rows <= 10){
        generatePyramid(rows);
        firstScreen.classList.add('hide');
        secondScreen.classList.add('show');
        resetBtn.classList.add('show');
    }
});

if(resetBtn){
    resetBtn.addEventListener("click", () => {
        isRunning = false;
        clearInterval(intervalID);
        intervalID = null;

        currentRowIndex = 0;

        rowInput.value = '';
        speedInput.value = '';
        colorInput.value = '#9D7DD9';

        if(errorMessage.classList.contains('show')){
            errorMessage.classList.remove('show');
        }

        firstScreen.classList.remove('hide');
        secondScreen.classList.remove('show');
        resetBtn.classList.remove('show');
    });
}

function generatePyramid(rows){
    pyramidContainer.innerHTML = "";
    const columnCount = 2 * rows - 1;
    
    for(let i = 1; i <= rows; i++){

        let shouldPrintSpace = true;
        const row = document.createElement('div');
        row.classList.add('row');

        for(let j = 1; j <= columnCount; j++){
            const ball = document.createElement('div');
            if(j >= (rows + 1) - i && j <= (rows - 1) + i && shouldPrintSpace){
                ball.classList.add('ball');
                shouldPrintSpace = false;
            }else {
                ball.classList.add('ball-empty');
                shouldPrintSpace = true;
            }
            row.appendChild(ball);
        }
        pyramidContainer.appendChild(row);
    }
}

startBtn.addEventListener("click", () => {
    if(!isRunning){
        isRunning = true;
        allRows = document.querySelectorAll('.row');
        illuminate();
    }
});
stopBtn.addEventListener("click", () => {
    isRunning = false;
    clearInterval(intervalID);
    intervalID = null;
});

function illuminate(){
    const delay = speedInput.value;
    const color = colorInput.value;

    
    if(delay === ''){
        isRunning = false;
        return;
    }else {
        intervalID = setInterval(()=> {

            if(currentRowIndex > 0){
                const previousRow = allRows[currentRowIndex - 1];
                const ballsInPreviousRow = previousRow.querySelectorAll('.ball');
                ballsInPreviousRow.forEach(ball => {
                    ball.classList.remove('illuminate-ball');
                    ball.style.backgroundColor = '';
                });
            }
    
            if(currentRowIndex === 0){
                const lastRow = allRows[allRows.length - 1];
                const ballsInLastRow = lastRow.querySelectorAll('.ball');
                ballsInLastRow.forEach(ball => {
                    ball.classList.remove('illuminate-ball');
                    ball.style.backgroundColor = '';
                });
            }
    
            const currentRow = allRows[currentRowIndex];
            const ballsInCurrentRow = currentRow.querySelectorAll('.ball');
            ballsInCurrentRow.forEach(ball => {
                ball.classList.add('illuminate-ball');
                ball.style.backgroundColor = color;
            });
    
            currentRowIndex ++;
            if (currentRowIndex >= allRows.length) {
                currentRowIndex = 0;
            }
            
        }, delay);
    }
}

restartBtn.addEventListener("click", () => {

    if(!isRunning){
        isRunning = true;
        allRows = document.querySelectorAll('.row');
        illuminate();
    }
    
    if(currentRowIndex > 0){
        const previousRow = allRows[currentRowIndex - 1];
        const ballsInPreviousRow = previousRow.querySelectorAll('.ball');
        ballsInPreviousRow.forEach(ball => {
            ball.classList.remove('illuminate-ball');
            ball.style.backgroundColor = '';
        });

        currentRowIndex = 0;
    }
    
    if(currentRowIndex === 0){
        const lastRow = allRows[allRows.length - 1];
        const ballsInLastRow = lastRow.querySelectorAll('.ball');
        ballsInLastRow.forEach(ball => {
            ball.classList.remove('illuminate-ball');
            ball.style.backgroundColor = '';
        });
    }
});