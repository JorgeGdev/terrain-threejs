import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import { SUBTRACTION, Evaluator, Brush } from 'three-bvh-csg'
import CustomShaderMaterial from "three-custom-shader-material/vanilla"
import terrainVertexShader from "./shaders/terrain/vertex.glsl"
import terrainFragmentShader from "./shaders/terrain/fragment.glsl"
import GUI from 'lil-gui'




/**
 * Base
 */
// Debug
const gui = new GUI({ width: 325 })
const debugObject = {}

// //texture
const loadingManager = new THREE.LoadingManager()
const textureLoader = new THREE.TextureLoader(loadingManager)

const colorTexture = textureLoader.load("/textures/wood_floor_worn_diff_1k.jpg")
colorTexture.colorSpace = THREE.SRGBColorSpace
const normalTexture = textureLoader.load("/textures/wood_floor_worn_nor_gl_1k.jpg")
normalTexture.colorSpace = THREE.SRGBColorSpace
const metalnessTexture = textureLoader.load("/wood_floor_worn_arm_1k.jpg")
metalnessTexture.colorSpace = THREE.SRGBColorSpace
const roughnessTexture = textureLoader.load("/textures/wood_floor_worn_arm_1k.jpg")
roughnessTexture.colorSpace = THREE.SRGBColorSpace
const ambientOcclusionTexture = textureLoader.load("/textureswood_floor_worn_arm_1k.jpg")
ambientOcclusionTexture.colorSpace = THREE.SRGBColorSpace




// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Loaders
const rgbeLoader = new RGBELoader()

/**
 * Environment map
 */
rgbeLoader.load('/spruit_sunrise.hdr', (environmentMap) =>
{
    environmentMap.mapping = THREE.EquirectangularReflectionMapping

    scene.background = environmentMap
    scene.backgroundBlurriness = 0.1
    scene.environment = environmentMap
})

/**
 * TERRAIN
 */

    //Geometry

const geometry = new THREE.PlaneGeometry(10, 10, 500, 500)
geometry.deleteAttribute("uv")
geometry.deleteAttribute("normal")
geometry.rotateX(-Math.PI * 0.5)

//Material

debugObject.colorWaterDeep = "#037cb0"
debugObject.colorWaterSurface = "#66a8ff"
debugObject.colorSand = "#e4b91b"
debugObject.colorGrass = "#85d534"
debugObject.colorSnow = "#ffffff"
debugObject.colorRock = "#663e05"


const uniforms = {
    uTime: new THREE.Uniform(0),
    uPositionFrequency: new THREE.Uniform(0.2),
    uStrenght : new THREE.Uniform(2.5),
    uWarpFrequency: new THREE.Uniform(5.0),
    uWarpStrenght: new THREE.Uniform(0.5),
    uColorWaterDeep: new THREE.Uniform(new THREE.Color(debugObject.colorWaterDeep)),
    uColorWaterSurface : new THREE.Uniform(new THREE.Color(debugObject.colorWaterSurface)),
    uColorSand : new THREE.Uniform(new THREE.Color(debugObject.colorSand)),
    uColorGrass : new THREE.Uniform(new THREE.Color(debugObject.colorGrass)),
    uColorSnow : new THREE.Uniform(new THREE.Color(debugObject.colorSnow)),
    uColorRock : new THREE.Uniform(new THREE.Color(debugObject.colorRock)),

}

gui.add(uniforms.uPositionFrequency,"value").min(0).max(1).step(0.001).name("Position Frequency")
gui.add(uniforms.uStrenght,"value").min(0).max(10).step(0.001).name("Strenght")
gui.add(uniforms.uWarpFrequency,"value").min(0).max(10).step(0.001).name("Warp Frequency")
gui.add(uniforms.uWarpStrenght,"value").min(0).max(1).step(0.001).name("Warp Strenght")
gui.addColor(debugObject, "colorWaterDeep").onChange(()=> uniforms.uColorWaterDeep.value.set(debugObject.colorWaterDeep))
gui.addColor(debugObject, "colorWaterSurface").onChange(()=> uniforms.uColorWaterSurface.value.set(debugObject.colorWaterSurface))
gui.addColor(debugObject, "colorSand").onChange(()=> uniforms.uColorSand.value.set(debugObject.colorSand))
gui.addColor(debugObject, "colorGrass").onChange(()=> uniforms.uColorGrass.value.set(debugObject.colorGrass))
gui.addColor(debugObject, "colorSnow").onChange(()=> uniforms.uColorSnow.value.set(debugObject.colorSnow))
gui.addColor(debugObject, "colorRock").onChange(()=> uniforms.uColorRock.value.set(debugObject.colorRock))



const material = new CustomShaderMaterial(
    {
        //CSM
        baseMaterial: THREE.MeshStandardMaterial,
        silent:true,
        vertexShader: terrainVertexShader,
        fragmentShader: terrainFragmentShader,
        uniforms:uniforms,

        //MeshStandardMaterial

        metalness:0.0,
        roughness:0.5,
        color: "#85d534",

    
    })


    const depthMaterial = new CustomShaderMaterial(
        {
            //CSM
            baseMaterial: THREE.MeshDepthMaterial,
            silent:true,
            vertexShader: terrainVertexShader,
            
            uniforms:uniforms,
    
            //MeshDepthMaterial
    
            depthPacking: THREE.RGBADepthPacking
    
        
        })

const terrain = new THREE.Mesh(geometry, material)
terrain.customDepthMaterial =  depthMaterial
terrain.receiveShadow= true
terrain.castShadow = true

scene.add(terrain)




//WATER

const water = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10, 1, 1,),
    new THREE.MeshPhysicalMaterial({
        transmission: 1,
        roughness:0.3 
    })
)
water.rotation.x = - Math.PI * 0.5
water.position.y = -0.1
scene.add(water)


    








//BOARD

//brushes



const boardFill = new Brush(new THREE.BoxGeometry(11, 2, 11))
const boardHole = new Brush(new THREE.BoxGeometry(10, 2.1, 10))

//Evaluate

const evaluator = new Evaluator()
const board = evaluator.evaluate(boardFill, boardHole, SUBTRACTION )
board.geometry.clearGroups()
board.material = new THREE.MeshStandardMaterial(
    {
        map:colorTexture,
        transparent:true,
        aoMap:ambientOcclusionTexture,
        //normalMap: normalTexture,
        roughnessMap: roughnessTexture,
        metalnessMap: metalnessTexture,
        
        // color: "#48dbfb",
        

})

board.castShadow = true
board.receiveShadow = true
scene.add(board)












/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 2)
directionalLight.position.set(6.25, 3, 4)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.near = 0.1
directionalLight.shadow.camera.far = 30
directionalLight.shadow.camera.top = 8
directionalLight.shadow.camera.right = 8
directionalLight.shadow.camera.bottom = -8
directionalLight.shadow.camera.left = -8
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2)
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    sizes.pixelRatio = Math.min(window.devicePixelRatio, 2)

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(sizes.pixelRatio)
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.set(-10, 6, -2)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(sizes.pixelRatio)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    //UPDATE MATERIAL
    
    uniforms.uTime.value = elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()