import {Scene} from "../scene/scene.js";

export class GLScene extends Scene {
    get glScene() {
        return this.getProperty("glScene", () => new THREE.Scene());
    }

    set glScene(newValue) {
        this.setProperty("glScene", newValue);
    }

    get background() {
        return this.getProperty("background", () => "black");
    }

    set background(newValue) {
        this.setProperty("background", newValue, () => this.glScene.background = new THREE.Color(newValue));
    }

    constructor(background) {
        super();
        this.background = background;
    }
}