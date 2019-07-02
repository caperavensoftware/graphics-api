import {Graphic} from "./graphic.js";
import {Vector2} from "./../types.js";

/**
 * This class draws a line between the start and end points
 */
export class Line extends Graphic {
    /**
     * Line start point getter
     */
    get start() {
        return this.getProperty("start", new Vector2());
    }

    /**
     * Line start point setter
     */
    set start(newValue) {
        this.setProperty("start", newValue);
    }

    /**
     * Line end point getter
     */
    get end() {
        return this.getProperty("end", new Vector2());
    }

    /**
     * Line end point setter
     */
    set end(newValue) {
        this.setProperty("end", newValue);
    }

    /**
     * Static constructor function for line
     * @param {Vector2} start 
     * @param {Vector2} end 
     */
    static create(start, end) {
        return super.create({start: start, end: end});
    }

    /**
     * Get the point data for the line
     */
    async getData() {
        return new Promise(resolve => {
            const data = [];
            resolve(data);
        });
    }
}