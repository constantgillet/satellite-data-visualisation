import * as THREE from 'three'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import earthSource from '../../static/images/earth.jpg'

/***
 * Textures
*/
const textureLoader = new THREE.TextureLoader()
const earthTexture = textureLoader.load(earthSource)

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

window.addEventListener('mousemove', (_event) => 
{
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
})

/**
 * Scene
 */
const scene = new THREE.Scene()

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20)
camera.position.z = 8
scene.add(camera)

/**
 * Light
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.x = 5
directionalLight.position.y = 5
directionalLight.position.z = 5
scene.add(directionalLight)

/**
 * GLTF loading 
 */
const gltfLoader = new GLTFLoader()

gltfLoader.load(
    'models/earth.gltf',
    (gltf) =>
    {
        while(gltf.scene.children.length)
        {
            const child = gltf.scene.children[0]
            scene.add(child)
        }
    }
)


/**
 * Object
 */
const geometry = new THREE.SphereGeometry( 3, 60, 60 );
const material = new THREE.MeshBasicMaterial(
    { 
        map: earthTexture,
    });
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
const canvasPosition = document.querySelector('.canvas-position')
canvasPosition.appendChild(renderer.domElement)

///**
// * Camera controls
// */
//const cameraControls = new OrbitControls(camera, renderer.domElement)
//cameraControls.zoomSpeed = 0.3
//cameraControls.enableDamping = true

/**
 * Resize
 */
window.addEventListener('resize', () => 
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Loop
 */
const loop = () =>
{
    sphere.rotation.y += 0.0005

    window.requestAnimationFrame(loop)

    //cameraControls.update()
    renderer.render(scene, camera)
    
}

loop()
