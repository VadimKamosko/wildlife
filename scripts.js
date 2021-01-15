// function squareDigits(num){
//     return +(num+"").split('').reduce((a,b)=>{
//       return a+b**2;
//     },'')

//   }

let leftNav = document.querySelector('.left');
let rightNav = document.querySelector(".right");

let line = document.querySelector(".gallery__line");
let rightNow = 0;

rightNav.addEventListener('click', () => {
    let temp = document.querySelector('.gallery__container').clientWidth;
    rightNow += 360;
    console.log(rightNow +' '+temp)
    if (rightNow + temp  > line.clientWidth)
        rightNow = 0;
    line.style.right = rightNow + "px"
})

leftNav.addEventListener('click', () => {
    let temp = document.querySelector('.gallery__container').clientWidth;
    rightNow -= 360;
    if (rightNow +60<0)
        rightNow =  line.clientWidth - temp -60;
    line.style.right = rightNow + "px"
})
