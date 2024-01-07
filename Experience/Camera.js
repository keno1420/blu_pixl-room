import * as THREE from 'three';

import Experience from "./Experience";

import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

export default class Camera{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createPerspectiveCamera()
        this.createOrthograhicCamera()
        console.log("Camera")
        this.perspectiveCamera.position.set(-3,2,5)

        this.setOrbitControls();
    }

    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(35,this.sizes.aspect,0.1,1000);
        this.scene.add(this.perspectiveCamera)
        
        console.log("Persp Cam Created")
    }
    createOrthograhicCamera(){
        this.frustrum = 5
        this.orthographicCamera = new THREE.OrthographicCamera()
        console.log("Ortho Cam Created")
    }
    resize(){
        this.perspectiveCamera.aspect = this.sizes.aspect
        this.perspectiveCamera.updateProjectionMatrix();
    }
    update(){

    }
    setOrbitControls(){
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.enableZoom = true;

    }
}