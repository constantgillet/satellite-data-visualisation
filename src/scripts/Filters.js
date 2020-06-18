export default class Filters {
    constructor(_element, satellites, updateSatellites) {
        this.element = _element
        this.satellites = satellites
        this.toggleFiltersButton = _element.querySelector('#js-toggle-filters-button')
        this.filter__button = _element.querySelector('.filters__button')
        this.filter__button = _element.querySelector('.filters__imput')
        this.filter__button = _element.querySelector('.filters__option')

        //Methods
        this.clickfilter__button()
        this.clickToggleFiltersButton()

    }

    clickToggleFiltersButton = () => {

        this.toggleFiltersButton.addEventListener('click', () => {

            form.classList.toggle('active')
        })


    }
    clickToggleFiltersButton = () => {
        const form = this.element.querySelector('.filters__button')

        this.toggleFiltersButton.addEventListener('click', () => {

            form.classList.toggle('active')
        })
    }

    clickToggleFiltersButton = () => {
        const form = this.element.querySelector('.filters__option')

        this.toggleFiltersButton.addEventListener('click', () => {

            form.classList.toggle('active')
        })

        clickToggleFiltersButton = () => {
            const form = this.element.querySelector('.filters__imput')

            this.toggleFiltersButton.addEventListener('click', () => {

                form.classList.toggle('active')
            })