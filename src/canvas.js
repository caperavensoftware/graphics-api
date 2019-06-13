export class Canvas {
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

        this._features = newValue;
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
        this._width = newValue;
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
        this._height = newValue;
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
     * Main render function responsible for all rendering
     */
    async render() {
        if (this._isRunning === false) return;

        return Promise.resolve().then(() => {
            requestAnimationFrame(() => {
                const features = this.features;
                for (let feature of features) {
                    feature.render();
                }
                this.render();
            });
        })
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