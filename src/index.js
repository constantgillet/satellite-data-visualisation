import './style/main.scss'
import { API_URL } from './scripts/config'
import Disclamer from './scripts/Disclamer'

const disclamer = new Disclamer()

const satelliteContents = document.body.querySelectorAll('.satellite-content')
const previousButton = document.body.querySelector('.parts-content__previous-button')
const nextButton = document.body.querySelector('.parts-content__next-button')
const partTitles = document.body.querySelectorAll('.parts-title')
let currentElementIndex = 0

const changeContent = (ElementIndex) => {
    if (ElementIndex == satelliteContents.length) {
        window.location.href = './map.html'
    }

    satelliteContents[currentElementIndex].classList.remove('is-active')
    satelliteContents[currentElementIndex].style.display = 'none'
    satelliteContents[ElementIndex].classList.add('is-active')
    satelliteContents[ElementIndex].style.display = 'flex'

    partTitles[currentElementIndex].classList.remove('is-active')
    partTitles[ElementIndex].classList.add('is-active')

    currentElementIndex = ElementIndex
}

for (let i = 0; i < partTitles.length; i++) {
    const partTitle = partTitles[i]

    partTitle.addEventListener('click', (_event) => {
        if (i != partTitles.length - 1) {
            _event.preventDefault()
        }
        changeContent(i)
    })
}

nextButton.addEventListener('click', () => {
    nextContent()
})

const nextContent = () => {
    let nextElementIndex = currentElementIndex + 1

    changeContent(nextElementIndex)
}

const previousContent = () => {
    let previousElementIndex

    if (currentElementIndex > 0)
        previousElementIndex = currentElementIndex - 1
    else
        previousElementIndex = satelliteContents.length-1
    changeContent(previousElementIndex)
}

previousButton.addEventListener('click', () => {
    previousContent()
})

window.addEventListener('keyup', (_event) => {
    
    if (_event.code == 'ArrowLeft') 
        previousContent()
    else if(_event.code == 'ArrowRight')
        nextContent()
})


/**
* Orbits class
*/

const lowOrbitNumber = document.body.querySelector('.earth-orbite-line__number__low')
const mediumOrbitNumber = document.body.querySelector('.earth-orbite-line__number__medium')
const hightOrbitNumber = document.body.querySelector('.earth-orbite-line__number__hight')

const orbitNumbers = [lowOrbitNumber, mediumOrbitNumber, hightOrbitNumber]

fetch(`${API_URL}/api/getOrbitClass.php`)
.then(res => res.json())
.then(data => {
    console.log(data)
    if (data.status == 'success') {
        lowOrbitNumber.innerText = data.class_of_orbit.LEO
        mediumOrbitNumber.innerText = data.class_of_orbit.MEO
        hightOrbitNumber.innerText = data.class_of_orbit.GEO
    }
},
(error) => {     
    console.error(error)       
})

const satelliteIcons = document.body.querySelectorAll('.js-earth-orbite')
const contentsOrbite = document.body.querySelectorAll('.content-orbite')

for (let i = 0; i < satelliteIcons.length; i++) {
    const satelliteIcon = satelliteIcons[i]
    const orbitNumber = orbitNumbers[i]

    console.log(orbitNumber)

    satelliteIcon.addEventListener('mouseenter', () => { displayContent(i) })
    orbitNumber.addEventListener('mouseenter', () => { displayContent(i) })

    satelliteIcon.addEventListener('mouseleave', () => { hideContent(i) })
    orbitNumber.addEventListener('mouseleave', () => { hideContent(i) })
}



const displayContent = (contentIndex) => {
    contentsOrbite[contentIndex].classList.add('is-active')
}

const hideContent = (contentIndex) => {
    contentsOrbite[contentIndex].classList.remove('is-active')
}
