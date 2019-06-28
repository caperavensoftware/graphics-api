import {SvgCanvas} from "./src/utils-svg/svg-canvas.js";
import {GLCanvas} from "./src/utils-webgl/gl-canvas.js";
import {CanvasGridFeature} from "./src/features/canvas-grid-feature.js";
import {createTestScene} from "./test-scene.js";
import {Base} from "./src/lib/base.js";

/**
 * Test project
 */
export class Project extends Base {
    get svgCanvas() {
        return this.getProperty("svgCanvas", () => new SvgCanvas("600", "400", "whitesmoke"));
    }

    set svgCanvas(newValue) {
        this.setProperty("svgCanvas", newValue);
    }

    get glCanvas() {
        return this.getProperty("glCanvas", () => new GLCanvas("600", "400", "silver"));
    }

    set glCanvas(newValue) {
        this.setProperty("glCanvas", newValue);
    }

    constructor() {
        super();
        window.pixelMultiplyer = 25;

        this.svgCanvas.addFeature(CanvasGridFeature).catch(reason => console.error(reason));
        
        window.addEventListener('unhandledrejection', event => alert(event.reason));
    }

    async start() {
        await createTestScene(this.svgCanvas.scene);
        await createTestScene(this.glCanvas.scene);
        this.svgCanvas.render();
        this.glCanvas.render();
    }

    pause() {
        this.svgCanvas.isRunning(false);
    }

    resume() {
        this.svgCanvas.isRunning(true);
    }
}