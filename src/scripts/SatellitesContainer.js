export default class SatellitesContainer {
    constructor(_element, numberOfSatellites){
        this.element = _element
        this.numberOfSatellites = numberOfSatellites


        this.displaySatellites()
    }

    displaySatellites = () => {
        for (let index = 0; index < this.numberOfSatellites; index++) {

            const satellite = document.createElement('div')
            satellite.classList.add('satellites-container__satellite')
            satellite.style.top = Math.floor((Math.random() * 600)) + 'px'
            satellite.style.left = Math.floor((Math.random() * 700)) + 'px'
            this.element.appendChild(satellite)
        }
    }
}