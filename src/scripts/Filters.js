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
        this.notSelectedOptions = []

        //Methods
        this.clickToggleFiltersButton()
        this.clickButtonSelectCountry()
        this.clickUsualSelect()
        this.clickLaucherTypeSelect()
        this.clickLaucherPlaceSelect()
        this.clickMasseSelect()

        this.optionClick()
    }

    optionClick = () => {
        const optionsElements = this.form.querySelectorAll('.filters__select-input option')
        
        for (let index = 0; index < optionsElements.length; index++) {
            const option = optionsElements[index]
            option.addEventListener('click', () => {
                if (this.notSelectedOptions.includes(index)) {
                    this.removeItem(this.notSelectedOptions, index)
                } else {
                    this.notSelectedOptions.push(index)
                }

                console.log(this.notSelectedOptions)
                let i = 0
                optionsElements.forEach(_element => {
                   
                   if (this.notSelectedOptions.includes(i)) {
                       _element.selected = false
                   } else {
                        _element.selected = true
                   }
                   i++
                })
                
                this.applyFilters()
            })
        }
    }

    applyFilters = () => {
    
    }

    removeItem = (array, item) => {
        for(var i in array){
            if(array[i]==item){
                array.splice(i,1);
                break;
            }
        }
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

    clickUsualSelect = () => {
        const buttonSelectUsual = this.form.querySelector('#js-button-select-usual')


        buttonSelectUsual.addEventListener('click', (_event) => {
            _event.preventDefault()
            buttonSelectUsual.classList.toggle('active')
            this.usualSelect.classList.toggle('active')
        })
    }

    clickLaucherTypeSelect = () => {
        const buttonSelectLaucherType = this.form.querySelector('#js-button-select-laucher-type')

        buttonSelectLaucherType.addEventListener('click', (_event) => {
            _event.preventDefault()
            buttonSelectLaucherType.classList.toggle('active')
            this.laucherTypeSelect.classList.toggle('active')

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