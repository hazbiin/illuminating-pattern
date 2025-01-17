// const rowInput = document.getElementById('row-input');
// const startBtn = document.getElementById('start-btn');
// const pyramidContainer = document.getElementById('pyramid-container');


// startBtn.addEventListener("click", () => {
//     const rowCount = rowInput.value;
    
//     generatePyramid(rowCount);


// });


// function generatePyramid(rowCount){

    
// }

// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 5; j++){
//         console.log("*");
//     }
//     console.log("\n");
// }

// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 5; j++){
//         document.writeln("*")
//     }
//     // console.log("\n");
//     document.writeln("<br>")
// }

// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j<= 5; j++){
//         if(j<= i){
//             document.writeln("*");
//         }else {
//             document.writeln(" ");
//         }
//     }
//     document.write("<br>");
// }
// so this is the way how we create patterns

// our pyramid condition
// for(let i = 1; i <= 5; i++){
//     let isNotSpace = true;
//     for(let j = 1; j <= 9; j++){
//         if(j >= 6 - i && j <= 4 + 1 && isNotSpace){
//             process.stdout.write("*");
//             // document.write("*");
//             isNotSpace = false;
//         }else{
//             // document.write("   ");
//             process.stdout.write(" ");
//             isNotSpace = true;
//         }
//     }
//     // document.write("<br>");
//     process.stdout.write("\n");
// }


for (let i = 1; i <= 5; i++) {
    let shouldPrintStar = true;
    for (let j = 1; j <= 9; j++) {
        if (j >= 6 - i && j <= 4 + i && shouldPrintStar) {
            document.write("*");
            shouldPrintStar = false;
        } else {
            document.write("&nbsp;");
            shouldPrintStar = true;
        }
    }
    document.write("<br>");
}


// function generatePyramid(rowCount){

//     const columnCount = 2 * rowCount - 1;

//     for (let i = 1; i <= rowCount; i++) {

//         let shouldPrintStar = true;
//         for (let j = 1; j <= columnCount; j++) {
//             if (j >= rowCount - i + 1 && j <= rowCount + i - 1 && shouldPrintStar) {

//                 const ball = document.createElement('div');
//                 ball.classList.add('ball');
//                 pyramidContainer.appendChild(ball);

//                 // document.write("*");
//                 shouldPrintStar = false;
//             } else {
//                 const ball = document.createElement('div');
//                 ball.classList.add('ball-empty');
//                 pyramidContainer.appendChild(ball);

//                 // document.write("&nbsp;");
//                 shouldPrintStar = true;
//             }
//         }
//         // document.write("<br>");
//         const newline = document.createElement('div');
//         newline.classList.add('newline');
//         pyramidContainer.appendChild(newline);
//     }
// }









// let illuminateID = null;
// let isRunning = false;
// let currentIndex = 0;

// startBtn.addEventListener("click", () => {
//     if(!isRunning){
//         isRunning = true;
//         illuminate();

//         illuminateID = setInterval(() => {
//             if(isRunning){
//                 illuminate();
//             }
//         },5000);
//     }
// });

// stopBtn.addEventListener("click", () => {
//     isRunning = false;
//     clearInterval(illuminateID);
//     illuminateID = null;
// });


// function illuminate(){
//     const allRows = document.querySelectorAll('.row');

//     for(let i = 0; i < allRows.length; i++ ){

//         setTimeout(() => {
//             // if(!isRunning) return;

//             const ballsInRow = allRows[i].querySelectorAll('.ball');
//             ballsInRow.forEach(ball => {
//                 ball.classList.add('illuminate-ball');
//             });

//             // removing the higlight of all other balls
//             setTimeout(() => {
//                 // if(!isRunning) return;

//                 ballsInRow.forEach(ball => {
//                     ball.classList.remove('illuminate-ball');
//                 });
//             }, 1000);

//         }, 1000 * i);
//     }
// }


// function illuminate(){
//     const allRows = document.querySelectorAll('.row');
//     allRows.forEach((row,index) => {
//         setTimeout(() => {
//             const ballsInRow = row.querySelectorAll('.ball');
//             ballsInRow.forEach(ball => {
//                 ball.classList.add('illuminate-ball');
//             });

//             //removing the higlight of all other balls
//             setTimeout(() => {
//                 ballsInRow.forEach(ball => {
//                     ball.classList.remove('illuminate-ball');
//                 });
//             }, 1000);

//         }, 1000 * index); 
//     });     
// }