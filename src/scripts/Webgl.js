import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import earthSource from '../../static/images/earth.jpg'
import earthNormalMapSource from '../../static/images/earth-normal-map.png'

/***
 * Textures
*/
const textureLoader = new THREE.TextureLoader()
const earthTexture = textureLoader.load(earthSource)
const earthNormalMap = textureLoader.load(earthNormalMapSource)

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
camera.position.z = 12
scene.add(camera)

/**
 * Light
 */
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.x = 5
directionalLight.position.y = 5
directionalLight.position.z = 5
scene.add(directionalLight)

///**
// * GLTF loading 
// */
//const gltfLoader = new GLTFLoader()
//
//gltfLoader.load(
//    'models/earth.gltf',
//    (gltf) =>
//    {
//        while(gltf.scene.children.length)
//        {
//            const child = gltf.scene.children[0]
//            scene.add(child)
//        }
//    }
//)


/**
 * Object
 */
const geometry = new THREE.SphereGeometry( 4, 60, 60 );
const material = new THREE.MeshMatcapMaterial(
    { 
        map: earthTexture,
        normalMap: earthNormalMap,
    });
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

const satellites = new THREE.Group()
scene.add(satellites)

for(let i=0; i<2600; i++){
    const satelliteGeometry = new THREE.SphereGeometry( 0.02, 10, 10 );
    const satelliteMaterial = new THREE.MeshBasicMaterial({
        color: 0x7FE7F1
    });
    const satellite = new THREE.Mesh( satelliteGeometry, satelliteMaterial );
    satellites.add( satellite );

    var orbitRadius = THREE.Math.randFloatSpread(5) + 6.8; // for example
    var date;
    
    date = THREE.Math.randFloatSpread(10);
    satellite.position.set(
      Math.cos(date) * orbitRadius,
      0,
      Math.sin(date) * orbitRadius,
    );
    satellite.position.y += THREE.Math.randFloatSpread(3.4);

}





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
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Loop
 */
const loop = () =>
{
    sphere.rotation.y += 0.0002
    satellites.rotation.y += 0.0003

    window.requestAnimationFrame(loop)

    cameraControls.update()
    renderer.render(scene, camera)
    
}

loop()
