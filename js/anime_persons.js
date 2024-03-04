const cardsContainer = document.querySelector('.cards')

async function fetchData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Ошибка получения данных:', error)
    }
}

function createCard(title, description) {
    const card = document.createElement('div')
    card.classList.add('card')

    const cardImage = document.createElement('img')
    cardImage.src = 'https://img.wattpad.com/3dcc0e1f69f2f308c3e13724bc7362c064d1ddb7/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5a6c32375054335a457a383850773d3d2d3131312e313638363538303065663538656131323630393933353632353632382e6a7067'

    const cardTitle = document.createElement('h3')
    cardTitle.textContent = title

    const cardDescription = document.createElement('p')
    cardDescription.textContent = description

    card.appendChild(cardImage)
    card.appendChild(cardTitle)
    card.appendChild(cardDescription)

    return card
}

async function renderCards() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
    const postsData = await fetchData(apiUrl)

    if (postsData) {
        postsData.forEach(post => {
            const newCard = createCard(post.title, post.body)
            cardsContainer.appendChild(newCard)
        })
    }
}

renderCards()

let prevScrollPos = window.pageYOffset
let isScrollingUp = false
window.addEventListener('scroll', function() {
    let currentScrollPos = window.pageYOffset

    if (prevScrollPos > currentScrollPos) {
        isScrollingUp = true
    } else {
        isScrollingUp = false
    }

    if (isScrollingUp || currentScrollPos === 0) {
        document.querySelector('.header').style.top = '0'
    } else {
        document.querySelector('.header').style.top = '-100px'
    }

    prevScrollPos = currentScrollPos
})