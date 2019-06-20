import {Graphic} from "./graphic.js";
import {Vector2} from "../types.js";

/**
 * This is a rectangle class with all it's data calculations
 */
export class Rectangle extends Graphic {
    get width() {
        return this.getProperty("width", () => 1);
    }
    
    set width(newValue) {
        this.setProperty("width", newValue);
    }
    
    get height() {
        return this.getProperty("height", () => 1);
    }
    
    set height(newValue) {
        this.setProperty("height", newValue);
    }
    
    /**
     * Static create function that allows piped expressions
     * @param width {number}
     * @param height {number}
     * @returns {Rectangle}
     */
    static create(width, height) {
        const result = new this.prototype.constructor();
        result.width = width;
        result.height = height;
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
            
            const padding = this.padding;
            const location = this.location;
            const width = this.width;
            const height = this.height;

            const data = [
                new Vector2().set(padding.left, padding.top).add(location),          
                new Vector2().set(width - padding.right, padding.top).add(location),
                new Vector2().set(width - padding.right, height - padding.bottom).add(location),
                new Vector2().set(padding.left, height - padding.bottom).add(location)   
            ]
            
            resolve(data);
        }))
    }
}