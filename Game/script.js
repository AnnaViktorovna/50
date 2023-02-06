const screens = document.querySelectorAll('.screen')
const choose_mosquito_btns = document.querySelectorAll('.choose-mosquito-btn');
const start_btn = document.getElementById('start-btn')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
const game_container = document.getElementById('game-container')

let seconds = 0
let score = 0
let selected_mosquito = {}

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_mosquito_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_mosquito = {src, alt}
        screens[1].classList.add('up')
        setTimeout(createMosquito, 1000)
        startGame()
    })
    
});

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createMosquito() {
    const mosquito = document.createElement('div')
    mosquito.classList.add('mosquito')
    const {x,y} =getRandomLocation()
    mosquito.style.top = `${y}px`
    mosquito.style.left = `${x}px`
    mosquito.innerHTML = `<img src="${selected_mosquito.src}" alt="${selected_mosquito.alt}" style="transform: rotate(${Math.random() *360}deg)" />`

    mosquito.addEventListener('click', catchMosquito)

    game_container.appendChild(mosquito)

}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return {x,y}

}

function catchMosquito() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addMosquitos()
}

function addMosquitos() {
    setTimeout(createMosquito, 1000)
    setTimeout(createMosquito, 1500)
}

function increaseScore() {
    score++
    if(score > 19) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}

