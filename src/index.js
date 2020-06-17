import './style/main.scss'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Filters from './scripts/Filters'

//On demande les satellites depuis l'API

//On applique les mets sur les filtres
const filters = new Filters(document.querySelector('.filters'))

//On met les petits points de satellites dans la div

//let filtredSatellites = []

//Filters
////Si on change les filtres alors on update les objects "Graphiques" ex chartPurposes.update(satellites)

//On gènère les graphiques avec le tableau d'objects satellites
////Dans les objets lors du survol d'un 

/**
 * Scene
 */
const scene = new THREE.Scene()

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20)
camera.position.z = 12
scene.add(camera)

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

/**
 * Object
 */
const geometry = new THREE.SphereGeometry( 5, 32, 32 );
const material = new THREE.MeshNormalMaterial();
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)

/**
 * Camera controls
 */
const cameraControls = new OrbitControls(camera, renderer.domElement)
cameraControls.zoomSpeed = 0.3
cameraControls.enableDamping = true

/**
 * Resize
 */
window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.upgradeProjectionMatrix()

    renderer.setSize(size.width, sizes.height)
})

/**
 * Loop
 */
const loop = () =>
{
    window.requestAnimationFrame(loop)

    cameraControls.update()
    renderer.render(scene, camera)
}
