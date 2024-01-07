import * as THREE from "three"
import Experience from "../Experience"
import {GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader.js"

import Assets from "../Utils/Assets"

export default class Room {
    constructor(){

        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.room = this.resources.items.room;
        this.actualRoom = this.resources.items.room.scene;


        this.setModel();

        console.log(this.resources.items.room)
        console.log(this.actualRoom)
           
    }
    setModel(){
        this.actualRoom.children.forEach(child=>{
            //child.castShadow = true;
            //child.receiveShadow = true;
            //Don't need shadows + small visual bug
            console.log(child)
            if(child.name === "Plane003"){
                child.material = new THREE.MeshBasicMaterial({map: this.resources.items.screen});
                
            }
        })

        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.65,0.65,0.65)
    }
}