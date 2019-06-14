import {SvgCanvas} from "./src/svg-utils/svg-canvas.js";
import {CanvasGridFeature} from "./src/features/canvas-grid-feature.js";
import {createTestScene} from "./test-scene.js";

/**
 * Test project
 */
export class Project {
    get canvas() {
        if (this._canvas == null) {
            this._canvas = new SvgCanvas("100%", "100%", "whitesmoke");
        }
        return this._canvas;
    }

    set canvas(newValue) {
        if (this._canvas != null) {
            this._canvas.dispose();
        }
        this._canvas = newValue;
    }

    constructor() {
        this.canvas.addFeature(CanvasGridFeature).catch(reason => console.error(reason));
        createTestScene(this.canvas.scene);
        window.addEventListener('unhandledrejection', event => alert(event.reason));
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