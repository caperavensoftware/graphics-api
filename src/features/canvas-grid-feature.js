import {BaseFeature} from "./base-feature.js";

/**
 * This feature draws grid lines on the svgCanvas
 */
export class CanvasGridFeature extends BaseFeature {
    /**
     * Register feature with features collection
     * @param collection {array}
     * @returns {Promise<void>}
     */
    static async register(collection) {
        return super.register(collection, CanvasGridFeature);
    }

    /**
     * Unregister feature from features collection
     * @param collection {array}
     * @returns {Promise<void>}
     */
    static async unregister(collection) {
        return super.unregister(collection, CanvasGridFeature);
    }

    /**
     * Render grid lines
     */
    render() {

    }
}