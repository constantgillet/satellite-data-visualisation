import './style/main.scss'

//Import objects
import Filters from './scripts/Filters'

console.log('Hello Webpack')

//On demande les satellites depuis l'API

//On applique les mets sur les filtres
const filters = new Filters(document.querySelector('.filters'))

//On met les petits points de satellites dans la div

//let filtredSatellites = []

//Filters
////Si on change les filtres alors on update les objects "Graphiques" ex chartPurposes.update(satellites)

//On gènère les graphiques avec le tableau d'objects satellites
////Dans les objets lors du survol d'un 
