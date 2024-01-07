import * as THREE from 'three';
import Sizes from './Utils/Sizes';
import Camera from './Camera';
import Renderer from './Renderer';
import Time from './Utils/Time';
import World from './World/World';
import Resources from './Utils/Resources';
import Assets from './Utils/Assets';

export default class Experience{
    static instance
    constructor(canvas){
        if(Experience.instance){
            return Experience.instance
        }
        console.log("Experience")
        Experience.instance = this
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        
        this.scene.background = new THREE.Color("#d7d7df")

        this.resources = new Resources(Assets);
        this.world = new World();

        this.time.on("update", ()=>{this.update()})
        this.sizes.on("resize", ()=>{this.resize()})
    }
    update(){
        this.camera.update()
        this.renderer.update()
        //console.log("r and c updated")
    }
    resize(){
        this.camera.resize()
        this.renderer.resize()
        console.log("r and c resized")
    }
}