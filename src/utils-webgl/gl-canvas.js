import {Canvas} from "./../canvas/canvas.js";
import {GLCamera} from "./gl-camera.js";
import {GLScene} from "./gl-scene.js";
import {Vector4} from "./../types.js";
/**
 * This is a webgl canvas class responsible for rendering webgl scene
 */
export class GLCanvas extends Canvas {
    get renderer() {
        return this.getProperty("renderer", () => {
            const result = new THREE.WebGLRenderer();
            result.setSize(this.width, this.height);
            return result;
        });
    }

    set renderer(newValue) {
        this.setProperty("renderer", newValue);
    }

    get dc() {
        return this.getProperty("dc", () => this.renderer.domElement);
    }

    set dc(newValue) {
        this.setProperty("dc", newValue);
    }

    get camera() {
        return this.getProperty("camera", () => GLCamera.create(new Vector4().set(0, 0, Number(this.width) / 2, Number(this.height) / 2)))
    }

    set camera(newValue) {
        this.setProperty("camera", newValue);
    }

    /**
     * Scene getter
     * @returns {Scene}
     */
    get scene() {
        return this.getProperty("scene", () => new GLScene(this.background));
    }

    /**
     * Scene setter
     * @param newValue
     */
    set scene(newValue) {
        this.setProperty("scene", newValue);
    }

    constructor(width, height, background) {
        super();

        this.width = width;
        this.height = height;
        this.background = background;
    }

    dispose() {
        this.camera = null;
        this.dc = null;
        this.renderer = null;
    }

    async render() {
        if (super.render() === false) return;

        this.renderer.render(this.scene.glScene, this.camera.glCamera);
    }
}