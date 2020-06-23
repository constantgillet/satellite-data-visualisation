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
        this.massSelect = this.element.querySelector('#js-select-mass')
        this.notSelectedOptions = []
        this.updateSatellites = updateSatellites
        this.currentOpenned = null

        //Methods
        this.clickToggleFiltersButton()
        this.clickButtonSelectCountry()
        this.clickUsualSelect()
        this.clickLaucherTypeSelect()
        this.clickLaucherPlaceSelect()
        this.clickMassSelect()
        this.clickButtonDeleteFilters()
        this.optionClick()
    }

    closeAll = () => {
        const buttonsSelect = this.form.querySelectorAll('.filters__button')
        const selectElements = this.form.querySelectorAll('.filters__select-input')


        for (let i = 0; i < buttonsSelect.length; i++) {
            const buttonSelect = buttonsSelect[i]

            if (i != this.currentOpenned) {
               buttonSelect.classList.remove('active') 
            }
        }

        for (let i = 0; i < selectElements.length; i++) {
            const selectElement = selectElements[i]

            if (i != this.currentOpenned) {
                selectElement.classList.remove('active') 
            }
        }
    }

    clickButtonDeleteFilters = () => {
        const deleteFiltersButton = this.element.querySelector('#js-delete-filters-button')

        deleteFiltersButton.addEventListener('click', () => {
            this.notSelectedOptions = []
            this.applyFilters()
            
            const optionsElements = this.form.querySelectorAll('.filters__select-input option')

            optionsElements.forEach(optionElement => {
                optionElement.selected = false
            })
        })
    }

    optionClick = () => {
        const optionsElements = this.form.querySelectorAll('.filters__select-input option')

        for (let index = 0; index < optionsElements.length; index++) {
            const option = optionsElements[index]
            option.addEventListener('click', () => {

                if (this.notSelectedOptions.includes(option.value)) {
                    this.removeItem(this.notSelectedOptions, option.value)
                    option.selected = false
                } else {
                    this.notSelectedOptions.push(option.value)
                    option.selected = true
                }

                let i = 0
                optionsElements.forEach(_element => {

                    if (this.notSelectedOptions.includes(_element.value)) {
                        _element.selected = true
                    } 
                    i++
                })
                console.log(this.notSelectedOptions)
                this.applyFilters()
            })
        }
    }

    applyFilters = () => {
        const newSatellites = []

        this.satellites.forEach(satelliteData => {
            let isAllowed = true

            this.notSelectedOptions.forEach(notSelectedOption => {
                if (satelliteData.country_operator_owner == notSelectedOption || satelliteData.purpose == notSelectedOption || satelliteData.launch_site == notSelectedOption) {
                    isAllowed = false
                } else if (satelliteData.launch_vehicle.includes(notSelectedOption)) {
                    isAllowed = false
                } else if(notSelectedOption.includes('mass') && parseFloat(satelliteData.launch_mass)) {

                    const mass = parseFloat(satelliteData.launch_mass)

                    if (notSelectedOption == 'mass__less__50') {
                        if (mass < 50) {
                            isAllowed = false 
                        }
                    } else if (notSelectedOption == 'mass__50__549') {
                        if (mass > 50 && mass < 549) {
                            isAllowed = false 
                        }
                    } else if (notSelectedOption == 'mass__550__1049') {
                        if (mass > 550 && mass < 1049) {
                            isAllowed = false 
                        }
                    } else if (notSelectedOption == 'mass__1050__2999') {
                        if (mass > 1050 && mass < 2999) {
                            isAllowed = false 
                        }
                    } else if (notSelectedOption == 'mass__3000__6000') {
                        if (mass > 3000 && mass < 6000) {
                            isAllowed = false 
                        }
                    } else if (notSelectedOption == 'mass__6000__9000') {
                        if (mass > 6000 && mass < 9000) {
                            isAllowed = false 
                        }
                    } else if (notSelectedOption == 'mass__more__9000') {
                        if (mass > 9000) {
                            isAllowed = false 
                        }
                    }
                }
            })

            if (isAllowed) {
                newSatellites.push(satelliteData)
            }
        })

        console.log(newSatellites.length)
        this.updateSatellites(newSatellites)
    }

    removeItem = (array, item) => {
        for (var i in array) {
            if (array[i] == item) {
                array.splice(i, 1);
                break;
            }
        }
    }
    clickToggleFiltersButton = () => {

        this.toggleFiltersButton.addEventListener('click', () => {

            this.form.classList.toggle('active-filter')
        })
    }

    clickButtonSelectCountry = () => {

        const buttonSelectCountry = this.form.querySelector('#js-button-select-country')
        buttonSelectCountry.addEventListener('click', (_event) => {
            _event.preventDefault()

            this.currentOpenned = 0

            this.closeAll()

            buttonSelectCountry.classList.toggle('active')
            this.countrySelect.classList.toggle('active')
        })
    }

    clickUsualSelect = () => {
        const buttonSelectUsual = this.form.querySelector('#js-button-select-usual')


        buttonSelectUsual.addEventListener('click', (_event) => {
            _event.preventDefault()

            this.currentOpenned = 1

            this.closeAll()

            buttonSelectUsual.classList.toggle('active')
            this.usualSelect.classList.toggle('active')
        })
    }

    clickLaucherTypeSelect = () => {
        const buttonSelectLaucherType = this.form.querySelector('#js-button-select-laucher-type')

        buttonSelectLaucherType.addEventListener('click', (_event) => {
            _event.preventDefault()

            this.currentOpenned = 2

            this.closeAll()

            buttonSelectLaucherType.classList.toggle('active')
            this.laucherTypeSelect.classList.toggle('active')
        })
    }

    clickLaucherPlaceSelect = () => {
        const buttonSelectLaucherPlace = this.form.querySelector('#js-button-select-laucher-place')

        buttonSelectLaucherPlace.addEventListener('click', (_event) => {
            _event.preventDefault()

            this.currentOpenned = 3

            this.closeAll()

            buttonSelectLaucherPlace.classList.toggle('active')
            this.laucherPlaceSelect.classList.toggle('active')
        })
    }

    clickMassSelect = () => {
        const buttonSelectMass = this.form.querySelector('#js-button-select-mass')

        buttonSelectMass.addEventListener('click', (_event) => {
            _event.preventDefault()

            this.currentOpenned = 4

            this.closeAll()

            buttonSelectMass.classList.toggle('active')
            this.massSelect.classList.toggle('active')
        })
    }
}


