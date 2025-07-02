// Output
const output = document.getElementById('output');

function display(val){
    output.innerHTML += val;
}

function clearDisplay(){
    output.innerHTML = '';
}

function calculate(){
    let expression = output.innerHTML;
    expression = expression.replaceAll("÷", "/").replaceAll("×", "*");
    if(isNaN(expression[expression.length - 1])){
        console.log(`The trailing operator "${expression[expression.length - 1]}" has been removed.`);
        expression = expression.slice(expression.length - expression.length, expression.length - 1);
        // console.log(eval(expression));
        clearDisplay();
        display(eval(expression));
    }else{
        clearDisplay();
        display(eval(expression));
    }
    
}