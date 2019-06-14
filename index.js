import {SvgCanvas} from "./src/svg-utils/svg-canvas.js";
import {CanvasGridFeature} from "./src/features/canvas-grid-feature.js";

/**
 * Test project
 */
export class Project {
    get canvas() {
        if (this._canvas == null) {
            this._canvas = new SvgCanvas("100%", "100%");
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