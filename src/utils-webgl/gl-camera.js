import {Camera} from "./../scene/camera.js"

export class GLCamera extends Camera {
    get glCamera() {
        return this.getProperty("glCamera", () => {
            const result = new THREE.OrthographicCamera(this.viewPort.x, this.viewPort.x + this.viewPort.width, this.viewPort.y, this.viewPort.y + this.viewPort.height, 0, 100);
            result.position.set(this.location.x, this.location.y, this.distance);
            return result;
        })
    }

    set glCamera(newValue) {
        this.setProperty("glCamera", newValue);
    }

    dispose() {
        this.glCamera = null;
    }

    /**
     * Factory function for creating webgl camera
     * @returns {GLCamera}
     */
    static create(viewPort) {
        const result = new GLCamera();
        result.viewPort = viewPort;
        return result;
    }
}