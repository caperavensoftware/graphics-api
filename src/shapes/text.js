import {Graphic} from "./graphic.js";

/**
 * This is a text shape used to write on the 2d canvas
 */
export class Text extends Graphic {
    /**
     * get string value to print
     */
    get string() {
        return this.getProperty("string", () => "");
    }

    /**
     * set string value to print
     */
    set string(newValue) {
        this.setProperty("string", newValue);
    }

    /**
     * Set the font size in units
     */
    get size() {
        return this.getProperty("size", () => 1);
    }

    /**
     * Get the font size in units
     */
    set size(newValue) {
        return this.setProperty("size", newValue);
    }

    /**
     * Create a text class
     * @param {string} string 
     */
    static create(string, size) {
        const result =  super.create({string: string});
        if (size != null) {
            result.size = size;
        }
        return result;
    }

    /**
     * Get gext data, this provides you with path information
     */
    async getData() {
        return new Promise((resolve) => {
            resolve();
        })
    }
}