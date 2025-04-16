import * as THREE from "three";

import { EventEmitter } from "events";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import Experience from "../Experience.js";

export default class Resources extends EventEmitter {
    constructor(Assets) {
        super();
        this.experience = new Experience();
        this.renderer = this.experience.renderer;

        this.Assets = Assets;

        this.items = {};
        this.queue = this.Assets.length;
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();

        
    }

    setLoaders() {
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.dracoLoader = new DRACOLoader();
        this.loaders.dracoLoader.setDecoderPath("/draco/");
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
    }
    startLoading() {
        for (const Asset of this.Assets) {
            if (Asset.type === "glbModel") {
                this.loaders.gltfLoader.load(Asset.path, (file) => {
                    this.singleAssetLoaded(Asset, file);
                });
            } 
        }
    }

    singleAssetLoaded(Asset, file) {
        this.items[Asset.name] = file;
        this.loaded++;

        if (this.loaded === this.queue) {
            this.emit("ready");
        }
    }
}
