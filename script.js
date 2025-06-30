// Output
const output = document.getElementById('output');
// Silver buttons
const clear = document.getElementById('clear');

clear.addEventListener("click", () => mazeYou());

function mazeYou(){
    let message = output.innerHTML = 'I Miss You, Baby :<';
    message = output.style.fontSize = '20px';
    return message;
}