let color = ['red', 'blue', 'pink', 'lightgreen', 'yellow']

let btn = document.querySelector('button');
btn.addEventListener('click', changeColor);
let body = document.querySelector('body');
function changeColor () {
    let indexColor = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[indexColor]
}
body.style.backgroundColor = "orange"

