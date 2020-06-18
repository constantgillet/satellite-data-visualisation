export default class Filters {
    constructor(_element, satellites, updateSatellites) {
        this.element = _element
        this.satellites = satellites
        this.toggleFiltersButton = _element.querySelector('#js-toggle-filters-button')
        this.form = this.element.querySelector('.filters__form')
        this.countrySelect = this.element.querySelector('#js-select-country')

        //Methods
        this.clickToggleFiltersButton()
        this.clickButtonSelectCountry()
    }

    clickToggleFiltersButton = () => {

        this.toggleFiltersButton.addEventListener('click', () => {
            
            this.form.classList.toggle('active')
        })
    }

    clickButtonSelectCountry = () => {

        const buttonSelectCountry = this.form.querySelector('#js-button-select-country')

        buttonSelectCountry.addEventListener('click', (_event) => {
            _event.preventDefault()
            buttonSelectCountry.classList.toggle('active')
            this.countrySelect.classList.toggle('active')
        })
    }
}