import {Base} from "./../lib/base.js";

/**
 * This is a base class for canvas types.
 * Do not use this class directly but instead the appropriate derived instance.
 */
export class Canvas extends Base {
    /**
     * Feature property getter
     * @returns {Array}
     */
    get features() {
        if (this._features == null) {
            this._features = [];
        }
        return this._features;
    }

    /**
     * Feature property setter
     * @param newValue
     */
    set features(newValue) {
        if (this._features != null) {
            for (let feature of this._features) {
                feature.dispose();
            }
        }

        this.setProperty("feature", newValue);
    }

    /**
     * Width getter
     * @returns {number}
     */
    get width() {
        return this._width;
    }

    /**
     * Width setter
     * @param newValue {number}
     */
    set width(newValue) {
        this.setProperty("width", newValue);
    }

    /**
     * Height getter
     * @returns {number}
     */
    get height() {
        return this._height;
    }

    /**
     * Height setter
     * @param newValue {number}
     */
    set height(newValue) {
        this.setProperty("height", newValue);
    }

    /**
     * Background getter
     * @returns {*}
     */
    get background() {
        return this._background;
    }

    /**
     * Background setter
     * @param newValue
     */
    set background(newValue) {
        this.setProperty("background", newValue);
    }

    /**
     * @destructor
     */
    dispose() {
        this.features = null;
    }

    /**
     * Register feature with the canvas used during rendering processes
     * @param feature {Class}
     */
    async addFeature(feature) {
        return feature.register(this.features);
    }

    /**
     * Remove feature from the canvas
     * @param feature {Class}
     */
    async removeFeature(feature) {
        return feature.unregister(this.features);
    }

    /**
     * This function renders the features associated registered with the canvas
     * @returns {Promise<void>}
     */
    async renderFeatures() {
        const features = this.features;
        for (let feature of features) {
            feature.render();
        }
    }

    /**
     * Main render function responsible for all rendering
     */
    async render() {
        if (this._isRunning === false) return false;
    }

    /**
     * Enable or disable the render process
     * @param running {boolean}
     * @returns {Promise<*>}
     */
    async isRunning(running) {
        this._isRunning = running;

        if (running === true) {
            return this.render();
        }
        else {
            return Promise.resolve();
        }
    }
}