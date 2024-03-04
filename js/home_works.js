// GMAIL CHECKER

const inputGmail = document.querySelector('#gmail_input')
const buttonGmail = document.querySelector('#gmail_button')
const resultGmail = document.querySelector('#gmail_result')

const regExp = /^[a-z0-9_-]+\.*[a-z0-9_-]+[a-z0-9-]{3,6}@gmail.com?$/
buttonGmail.addEventListener('click', () => {
    if (regExp.test(inputGmail.value)) {
        resultGmail.innerHTML = 'true'
        resultGmail.style.color = 'green'
    } else {
        resultGmail.innerHTML = 'false'
        resultGmail.style.color = 'red'
    }
})


// //красный квадрать
const blockSquare = document.querySelector('.parent_block')
const redSquare = document.querySelector('.child_block')
const mainWight = blockSquare.offsetWidth - redSquare.offsetWidth
const mainHeight = blockSquare.offsetHeight - redSquare.offsetHeight

let positionX = 0
let positionY = 0

const moveBlock = () => {
    if (positionX < mainWight && positionY === 0) {
        positionX += 3
        redSquare.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    } else if (positionX === mainHeight && positionY < mainHeight) {
        positionY += 3
        redSquare.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    } else if (positionY === mainWight && positionX !== 0) {
        positionX -= 3
        redSquare.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    } else if (positionX === 0 && positionY !== 0) {
        positionY -= 3
        redSquare.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()

const buttonStart = document.querySelector('#start')
const buttonStop = document.querySelector('#stop')
const buttonReset = document.querySelector('#reset')
const second = document.querySelector('#seconds')
let counter = 0
let running = false
let timerInterval;
const seconds1 = () => {
    counter++
    second.textContent = counter
}
const start = () => {
    if (!running) {
        timerInterval = setInterval(seconds1, 1000)
        running = true
    }
}
buttonStart.onclick = start

const stop = () => {
    clearInterval(timerInterval)
    running = false
}
buttonStop.onclick = stop

const reset = () => {
    clearInterval(timerInterval)
    counter = 0
    second.textContent = counter
    running = false
}
buttonReset.onclick = reset