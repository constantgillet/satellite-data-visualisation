import './style/main.scss'
import Filters from './scripts/Filters'
import Webgl from './scripts/Webgl'
import { API_URL } from './scripts/config'

//On demande les satellites depuis l'API

let satellites
const webgl = new Webgl

fetch(`${API_URL}/api/getAllSatellites.php`)
.then(res => res.json())
.then(data => {
    satellites = data
    console.log(data[0])

    //On applique les mets sur les filtres
    const filters = new Filters(document.querySelector('.filters'), satellites)
    const satellitesNumber = document.querySelector('#satellites-number')
    
    satellitesNumber.innerText = satellites.length



},
(error) => {     
    console.error(error)       
})


//On met les petits points de satellites dans la div

//let filtredSatellites = []

//Filters
////Si on change les filtres alors on update les objects "Graphiques" ex chartPurposes.update(satellites)

//On gènère les graphiques avec le tableau d'objects satellites
////Dans les objets lors du survol d'un 