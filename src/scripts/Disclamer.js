export default class Disclamer {
    constructor() {
        
        if(localStorage.getItem('hasAcceptedDisclamer') == null) {
            this.init()
        }
        
    }

    init() {
        this.disclamerDiv = document.createElement('div')
        this.disclamerDiv.classList.add('disclamer')

        //add text
        this.disclamerText = document.createElement('p')
        this.disclamerText.classList.add('disclamer__text')
        this.disclamerText.innerText = 'Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Grande Ecole de l’école HETIC. Les contenus et données présentés n\'ont pas fait l\'objet d\'une demande de droit d\'utilisation. Ce site ne sera en aucun cas exploité à des fins commerciales'
        
        //close button
        this.closeButton = document.createElement('button')
        this.closeButton.classList.add('disclamer__close-button')

        document.body.appendChild(this.disclamerDiv)
        this.disclamerDiv.appendChild(this.disclamerText)
        this.disclamerDiv.appendChild(this.closeButton)

        this.buttonClick()
    }

    buttonClick = () => {
        this.closeButton.addEventListener('click', () => {

            this.disclamerDiv.classList.add('hide')
            localStorage.setItem('hasAcceptedDisclamer', true)

            setTimeout(() => {
                this.disclamerDiv.style.display = 'none'
            }, 1000)
        })
    }
}