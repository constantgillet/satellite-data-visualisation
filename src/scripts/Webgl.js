import * as THREE from 'three'
import earthSource from '../../static/images/earth.jpg'
import earthNormalMapSource from '../../static/images/earth-normal-map.png'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Webgl {
    constructor() {
        this.numberOfSatellitesSelected = 0
        this.scene = null
        this.init()
    }

    updateColors = (numberOfSatellitesSelected) => {
        this.numberOfSatellitesSelected = numberOfSatellitesSelected

        const satellites = this.scene.children[3].children
        //console.log(this.scene.children[3].children)

        satellites.forEach(satellite => {
            satellite.material.color = {r: 0, g: 255, b: 255}
        })

        for (let i = 0; i < this.numberOfSatellitesSelected; i++) {
            const satellite = this.scene.children[3].children[i]

            satellite.material.color = {r: 1, g: 0, b: 0}
        }
    }

    init = () => {
        
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
         * this.scene
         */
        this.scene = new THREE.Scene()

        /**
         * Camera
         */
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20)
        camera.position.z = 12
        this.scene.add(camera)

        /**
         * Light
         */
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
        directionalLight.position.x = 5
        directionalLight.position.y = 5
        directionalLight.position.z = 5
        this.scene.add(directionalLight)

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
        this.scene.add( sphere );

        const satellites = new THREE.Group()
        this.scene.add(satellites)

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

        /**
         * Orbit Control
         */
        const cameraControls = new OrbitControls(camera, renderer.domElement)
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

            cameraControls.update()

            sphere.rotation.y += 0.0002
            satellites.rotation.y += 0.0003

            window.requestAnimationFrame(loop)

            renderer.render(this.scene, camera)
            
        }

        loop()

    }
}
