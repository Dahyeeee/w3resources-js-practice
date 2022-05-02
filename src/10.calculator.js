const box= document.querySelector('#box');
box.style.border = "thin solid black";
const firstNum = Number(document.querySelector('.number1').value);
const secondNum = Number(document.querySelector('.number2').value);
const result = document.querySelector('.result');

//왜 전역변수가 함수 안에서 실행이 안되지?

function multiply(){
    const firstNum = Number(document.querySelector('.number1').value);
    const secondNum = Number(document.querySelector('.number2').value);
    const answer = firstNum * secondNum;
    result.innerHTML = answer;
}

function divide(){
    const firstNum = Number(document.querySelector('.number1').value);
    const secondNum = Number(document.querySelector('.number2').value);
    const answer = firstNum/secondNum;
    result.innerHTML= answer;
}
