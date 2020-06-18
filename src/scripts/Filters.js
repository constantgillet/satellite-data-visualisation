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
        this.clickUsualSelect()
        this.clickLaucherTypeSelect()
        this.clickLaucherPlaceSelect()
        this.clickMasseSelect()

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
<<<<<<< HEAD
            if (buttonSelectUsual.classList.toggle('active')) {
                buttonSelectCountry.removeclassList('active')
                console.log(this.form.open);

            }
=======
>>>>>>> 0a8e7ada1164f8ab3d5ac709189f128592dabd48
        })
    }

    clickUsualSelect = () => {
        const buttonSelectUsual = this.form.querySelector('#js-button-select-usual')


        buttonSelectUsual.addEventListener('click', (_event) => {
            _event.preventDefault()
<<<<<<< HEAD

            buttonSelectUsual.classList.toggle('active')

=======
            buttonSelectUsual.classList.toggle('active')
>>>>>>> 0a8e7ada1164f8ab3d5ac709189f128592dabd48
            this.usualSelect.classList.toggle('active')
        })
    }

    clickLaucherTypeSelect = () => {
        const buttonSelectLaucherType = this.form.querySelector('#js-button-select-laucher-type')

        buttonSelectLaucherType.addEventListener('click', (_event) => {
            _event.preventDefault()
            buttonSelectLaucherType.classList.toggle('active')
            this.laucherTypeSelect.classList.toggle('active')
<<<<<<< HEAD

=======
>>>>>>> 0a8e7ada1164f8ab3d5ac709189f128592dabd48

        })
    }

    clickLaucherPlaceSelect = () => {
        const buttonSelectLaucherPlace = this.form.querySelector('#js-button-select-laucher-place')

        buttonSelectLaucherPlace.addEventListener('click', (_event) => {
            _event.preventDefault()
            buttonSelectLaucherPlace.classList.toggle('active')
            this.laucherPlaceSelect.classList.toggle('active')
        })
    }

    clickMasseSelect = () => {
        const buttonSelectMasse = this.form.querySelector('#js-button-select-masse')

        buttonSelectMasse.addEventListener('click', (_event) => {
            _event.preventDefault()
            buttonSelectMasse.classList.toggle('active')
            this.masseSelect.classList.toggle('active')
        })
    }
}