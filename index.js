import {SvgCanvas} from "./src/svg-utils/svg-canvas.js";
import {CanvasGridFeature} from "./src/features/canvas-grid-feature.js";
import {createTestScene} from "./test-scene.js";
import {Base} from "./src/lib/base.js";
import {Graphic} from "./src/shapes/graphic.js";

/**
 * Test project
 */
export class Project extends Base {
    get canvas() {
        return this.getProperty("canvas", () => new SvgCanvas("100%", "100%", "whitesmoke"));
    }

    set canvas(newValue) {
        this.setProperty("canvas", newValue);
    }

    constructor() {
        super();
        this.canvas.addFeature(CanvasGridFeature).catch(reason => console.error(reason));
        createTestScene(this.canvas.scene);
        window.addEventListener('unhandledrejection', event => alert(event.reason));

        const g = new Graphic();
    }

    start() {
        this.canvas.render();
    }

    pause() {
        this.canvas.isRunning(false);
    }

    resume() {
        this.canvas.isRunning(true);
    }
}