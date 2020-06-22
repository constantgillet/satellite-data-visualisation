import './style/main.scss'
import Filters from './scripts/Filters'
import Webgl from './scripts/Webgl'
import { API_URL } from './scripts/config'

console.log('test')

let satellites
const webgl = new Webgl
const satellitesNumber = document.querySelector('#satellites-number')

const updateSatellites = (newSatellites) => {
    //console.log(newSatellites)
    if (newSatellites.length == satellites.length) {
        satellitesNumber.innerText = satellites.length
    } else {
        satellitesNumber.innerText = satellites.length - newSatellites.length 
    }
    
    webgl.updateColors(satellites.length - newSatellites.length)
}

fetch(`${API_URL}/api/getAllSatellites.php`)
.then(res => res.json())
.then(data => {
    satellites = data
    console.log(data[0])

    //On applique les mets sur les filtres
    const filters = new Filters(document.querySelector('.filters'), satellites, updateSatellites)
    
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