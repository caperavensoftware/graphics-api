import {Graphic} from "./graphic.js";

export class Circle extends Graphic {
    /**
     * Get the radius value
     * @returns {number}
     */
    get radius() {
        return this.getProperty("radius", () => 1);
    }

    /**
     * Set the radius value for the circle
     * @param newValue
     */
    set radius(newValue) {
        this.setProperty("radius", newValue);
    }

    /**
     * Get the number of steps used to calculate the circle data
     * @returns {*}
     */
    get steps() {
        return this.getProperty("steps", 32)
    }

    /**
     * Set the number of steps to use for the circle data
     * @param newValue
     */
    set steps(newValue) {
        this.setProperty("steps", newValue);
    }

    /**
     * Create a instance of circle shape
     * @param radius {number}: radius value of the circle
     * @returns {Circle}
     */
    static create(radius) {
        return super.create({radius: radius});
    }

    async getData() {
        return new Promise(resolve => {
            const padding = this.padding;
            const location = this.location;
            const radius = this.radius;

            // todo: calculate circle data
            const data = [];
            resolve(data);
        })
    }
}