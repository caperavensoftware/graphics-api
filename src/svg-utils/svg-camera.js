import {Camera} from "./../scene/camera.js"

export class SvgCamera extends Camera {
    static create() {
        return new SvgCamera();
    }
}