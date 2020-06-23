import './style/main.scss'
import { API_URL } from './scripts/config'
import Disclamer from './scripts/Disclamer'

const disclamer = new Disclamer()

let previousButton = document.querySelector('.parts-content__previous-button')
let nextButton = document.querySelector('.parts-content__next-button')
let printText = document.querySelector('.parts-content__history')

nextButton.addEventListener('click', () => {


    printText.classList.toggle('active')

})

previousButton.addEventListener('click', () => {
    printText.remove.classList
})






console.log('Index js log') 