import {Camera} from "./../scene/camera.js"

/**
 * Svg camera. 
 * This is the same as a standard camera but applies to dc rendering
 */
export class SvgCamera extends Camera {
    /**
     * Factory function for creating dc camera
     * @returns {SvgCamera}
     */
    static create() {
        return new SvgCamera();
    }
}