const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hexCol = '#';
    for(let i = 0; i < 6; i++) {
        hexCol += hex[getRandomNum()]
    }
    console.log(hexCol)
    color.textContent = hexCol;
    document.body.style.background = hexCol;
})

function getRandomNum() {
    return Math.floor(Math.random() * hex.length)
}
