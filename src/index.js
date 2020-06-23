import './style/main.scss'
import { API_URL } from './scripts/config'
import Disclamer from './scripts/Disclamer'

const disclamer = new Disclamer()

class partsContent {
    constructor(element, options = {}) {
        this.element = element
        this.options = object.assign({}, {
            slidesToScroll: 1,
            sliderVisible: 1

        }, option)
        this.children = [].slice.call(element.children)
        let root = this.creatDivWhithClass('caroucel')
        let container = this.creatDivWhithClass('caroucel__container')
        root.appendChild(container)
        this.element.appendChild(root)
        this.children; array.forEach(function (child) {
            container.appendChild(child)
        })

    }


    creatDivWhithClass(className) {
        let div = document.createElement('div')
        root.setAttribute('class', 'className')
        return div
    }



    document.addEventListener('DOMContentLoad', function() {

        new Carousel(document.querySelector('.part-content'), {
            sliderVisible: 3
        })
    }

}



let previousButton = document.querySelector('.parts-content__previous-button')
const step = 960
let pos = 0
let nextButton = document.querySelector('.parts-content__next-button')
const printHistory = document.querySelector('.parts-content__history')
const printCountries = document.querySelector('.parts-content__countries')
const printOrbite = document.querySelector('.parts-content__orbite')
const printLifeDuration = document.querySelector('.parts-content__life-duration')
const sliderVisualisation = document.querySelector('.part-content')
const sliderContent = document.querySelectorAll('.part-content .satellite-content')


// //On ajoute une div à la div .sliderPagination
// sliderVisualisation = sliderVisualisation + '<div class="slider' + n + '"></div>'
// sliderPagination.innerHTML = sliderVisualisation




nextButton.addEventListener('click', () => {


    printHistory.classList.toggle('active')

    if (printHistory.classList == ('active')) {
        add.printHistory.classList.toggle('is-active')
    }



})

previousButton.addEventListener('click', () => {
    printHistory.classList.toggle('is-active')
})






console.log('Index js log') 