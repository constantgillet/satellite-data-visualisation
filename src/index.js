import './style/main.scss'
import Filters from './scripts/Filters'
import Webgl from './scripts/Webgl'
import { API_URL } from './scripts/config'

//On demande les satellites depuis l'API

//On applique les mets sur les filtres
const filters = new Filters(document.querySelector('.filters'))

fetch(`${API_URL}/api/getAllSatellites.php`)
.then(res => res.json())
.then(data => {
    console.log(data[0])
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