import {Graphic} from "./graphic.js";

/**
 * This class deals with drawing a polygon
 */
export class Polygon extends Graphic {
    /**
     * Get array of Vector2 defining the polygon
     */
    get points() {
        return this.getProperty("points", () => []);
    }

    /**
     * Set array of Vector2 defining the polygon
     */
    set points(newValue) {
        this.setProperty("points", newValue);
    }

    /**
     * Static create function to create the polygon
     * @param points {array}: Array of Vector2
     */
    static create(points) {
        return super.create({points: points});
    }

    /**
     * Calculate data points
     */
    async getData() {
        return new Promise(resolve => {
            resolve();
        });
    }
}
