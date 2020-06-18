export default class Filters {
    constructor(_element, satellites, updateSatellites) {
        this.element = _element
        this.satellites = satellites
        this.toggleFiltersButton = _element.querySelector('#js-toggle-filters-button')
        this.form = this.element.querySelector('.filters__form')
        this.countrySelect = this.element.querySelector('#js-select-country')
        this.usualSelect = this.element.querySelector('#js-select-usual')
        this.laucherTypeSelect = this.element.querySelector('#js-select-laucher-type')
        this.laucherPlaceSelect = this.element.querySelector('#js-select-laucher-place')
        this.masseSelect = this.element.querySelector('#js-select-masse')

        //Methods
        this.clickToggleFiltersButton()
        this.clickButtonSelectCountry()
        this.clickusualSelect()
        this.clicklaucherTypeSelect()
        this.clicklaucherPlaceSelect()
        this.clickmasseSelect()
    }

    clickToggleFiltersButton = () => {
        const form = this.element.querySelector('.filters__button')

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

    clickusualSelect = () => {
        const buttonSelectUsual = this.element.querySelector('.filters__button')

        this.toggleFiltersButton.addEventListener('click', (_event) => {

            buttonSelectUsual.classList.toggle('active')
            this.usualSelect.classList.toggle('active')
        })
    }

    clicklaucherTypeSelect = () => {
        const buttonSelectLaucherType = this.element.querySelector('.filters__option')

        this.toggleFiltersButton.addEventListener('click', (_event) => {

            buttonSelectLaucherType.classList.toggle('active')
            this.laucherTypeSelect.classList.toggle('active')
        })
    }

    clicklaucherPlaceSelect = () => {
        const buttonSelectLaucherPlace = this.element.querySelector('.filters__imput')

        this.toggleFiltersButton.addEventListener('click', (_event) => {

            buttonSelectLaucherPlace.classList.toggle('active')
            this.laucherPlaceSelect.classList.toggle('active')
        })
    }

    clickmasseSelect = () => {
        const buttonSelectMasse = this.element.querySelector('.filters__imput')

        this.toggleFiltersButton.addEventListener('click', (_event) => {

            buttonSelectMasse.classList.toggle('active')
            this.masseSelect.classList.toggle('active')
        })
    }
}