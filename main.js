const display = document.querySelector(".display");
const operator = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const decimal = document.querySelector(".decimal");


// default values
let displayNum = '0';
let pendingNum;
let evalArray = [];


// Funcion display number on click 
numbers.forEach((number)=> {
  number.addEventListener('click', (e)=> {
    if(displayNum === '0'){
      displayNum = '';
    }
    displayNum += e.target.innerText;
    display.innerText = displayNum;
  })
})

// Funcntion that handle operators functionality on click
operator.forEach((operator)=> {
  operator.addEventListener('click', (e)=> {
    switch(e.target.innerText){
      case 'AC':
        displayNum = '0'; display.innerText = displayNum;
      break;

      case 'CE':
        display.innerText =  display.innerText.slice(0, -1);
      if(display.innerText === '') {
        displayNum = '0'
        display.innerText = displayNum;
      }
      break;

      case '+':
        pendingNum = displayNum;
        displayNum = '0';
        display.innerText = displayNum;
        evalArray.push(pendingNum);
        evalArray.push('+');
        break;

      case '-':
        pendingNum = displayNum;
        displayNum = '0';
        display.innerText = displayNum;
        evalArray.push(pendingNum);
        evalArray.push('-');
        break;

      case 'x':
        pendingNum = displayNum;
        displayNum = '0';
        display.innerText = displayNum;
        evalArray.push(pendingNum);
        evalArray.push('*');
        break;
      case '÷':
        pendingNum = displayNum;
        displayNum = '0';
        display.innerText = displayNum;
        evalArray.push(pendingNum);
        evalArray.push('/');
        break;
      case '=':
        evalArray.push(displayNum);
        let operation = eval(evalArray.join(' '));
        displayNum = operation + '';
        display.innerText = displayNum;
        evalArray = [];
        break;
    }
  })
})

//Funtion display decimal if it is not already there

decimal.addEventListener('click', ()=> {
  if(!displayNum.includes('.')){
    displayNum += '.';
    display.innerText = displayNum;
  }
});

