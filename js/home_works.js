// GMAIL CHECKER

const inputGmail = document.querySelector('#gmail_input')
const buttonGmail = document.querySelector('#gmail_button')
const resultGmail = document.querySelector('#gmail_result')

const regExp = /^(([a-z0-9_-]+\.)*[a-z0-9_-]+[a-z0-9-]{3,6}@gmail.com)?$/
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

let i = 0
const increment = () => {
    if (i < 447) {
        i++
        redSquare.style.left = `${i}px`
        requestAnimationFrame(increment)
    }
}
increment()

