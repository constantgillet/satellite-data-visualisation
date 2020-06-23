import './style/main.scss'
import { API_URL } from './scripts/config'
import Disclamer from './scripts/Disclamer'

const disclamer = new Disclamer()

// class partsContent {

//     constructor(element, options = {}) {
//         this.element = element
//         this.options = object.assign({}, {
//             slidesToScroll: 1,
//             sliderVisible: 1

//         }, option)
//         this.children = [].slice.call(element.children)
//         this.currentItem = 0
//         this.root = this.creatDivWhithClass('caroucel')
//         let container = this.creatDivWhithClass('caroucel__container')
//         container.style.width = (ration * 100) + "%"
//         root.appendChild(container)
//         this.element.appendChild(root)
//         this.children.forEach((child) => {
//             let item = this.creatDivWhithClass('caroussel__item')
//             item.style.width = (100 / this.options.sliderVisible / ratio) + "%"
//             item.appendChild(child)
//             this.container.appendChild(child)
//             return item
//         })
//     }

//     navigationButton() {
//         let nextButton = document.querySelector('.parts-content__next-button')
//         let previousButton = document.querySelector('.parts-content__previous-button')
//         nextButton.addEventListener('click', this.next.bind(this))
//         previousButton.addEventListener('click', this.previousButton.bind(this))
//     }

//     next() {
//         this.goToItem(this.currentItem + this.options.slidesToScroll)
//     }

//     prev() {
//         this.goToItem(this.currentItem - this.options.slidesToScroll)
//     }

//     goToItem(index) {
//         let translateX = index * - 100 / this.item.length
//         this.container.style.transform = 'translate3d(' + translateX + '%,0,0)'
//         this.currentItem = index
//     }

//     creatDivWhithClass(className) {
//         let div = document.createElement('div')
//         root.setAttribute('class', 'className')
//         return div
//     }




//     document.addEventListener('DOMContentLoad', () => {

//         new Carousel(document.querySelector('.part-content'), {
//             sliderVisible: 3
//         })
//     }
// }









const printHistory = document.querySelector('.parts-content__history')
const sliderContent = document.querySelectorAll('.part-content')
let nextButton = document.querySelector('.parts-content__next-button')
let previousButton = document.querySelector('.parts-content__previous-button')
let currentContent = 0

const changeContent = (contentIndex) => {
    sliderContent[currentContent].classList.remove('is-active')
    currentContent = contentIndex
    sliderContent[currentContent].classList.add('is-active')
}


nextButton.addEventListener('click', () => {

    changeContent(currentContent++)


})



previousButton.addEventListener('click', () => {
    sliderContent.classList.toggle('is-active')
})






console.log('Index js log') 