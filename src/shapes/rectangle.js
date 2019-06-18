import {Graphic} from "./graphic.js";
import {Vector2} from "../types.js";

/**
 * This is a rectangle class with all it's data calculations
 */
export class Rectangle extends Graphic {
    /**
     * Static create function that allows piped expressions
     * @param width {number}
     * @param height {number}
     * @returns {Rectangle}
     */
    static create(width, height) {
        const result = new this.prototype.constructor();
        result.bbox.set(0, 0, width, height);
        return result;
    }

    /**
     * Get the calculated values for the rectangle including location information
     * @returns {Promise<*>}
     */
    async getData() {
        return new Promise((resolve => {
            //todo: JHR: bbox should be renamed to dimentions or something, this is not used correctly.
            // the bounding box should be the end result of this calculation
            
            const bounds = this.bbox;
            const padding = this.padding;
            const location = this.location;

            const data = [
                new Vector2().set(bounds.x + padding.left, bounds.y + padding.top).add(location),          
                new Vector2().set(bounds.width - padding.right, bounds.y + padding.top).add(location),
                new Vector2().set(bounds.width - padding.right, bounds.height - padding.bottom).add(location),
                new Vector2().set(bounds.x + padding.left, bounds.height - padding.bottom).add(location)   
            ]
            
            resolve(data);
        }))
    }
}