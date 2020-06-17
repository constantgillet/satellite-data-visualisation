export default class Filters {
    constructor(_element, satellites, updateSatellites) {
        this.element = _element
        this.satellites = satellites
        this.toggleFiltersButton = _element.querySelector('#js-toggle-filters-button')

        //Methods
        this.clickToggleFiltersButton()
    }

    clickToggleFiltersButton = () => {
        const form = this.element.querySelector('.filters__form')

        this.toggleFiltersButton.addEventListener('click', () => {
            
            form.classList.toggle('active')
        })
    }
}