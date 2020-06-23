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
    satelliteContents[ElementIndex].classList.add('is-active')
    currentElementIndex = ElementIndex
}

for (let i = 0; i < partTitles.length; i++) {
    const partTitle = partTitles[i]
    
    partTitle.addEventListener('click', (_event) => {
        if (i != partTitles.length-1) {
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

    if(currentElementIndex > 0)
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