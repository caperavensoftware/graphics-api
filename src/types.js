import {Base} from "./lib/base.js";

/**
 * Vector base class
 */
class Vector {
    /**
     * @constructor
     * @returns {Vector}
     */
    constructor() {
        return this;
    }

    /**
     * Values property that contains the matrix values
     * @returns {array}
     */
    get values() {
        if (this._values == null) {
            this._values = this._createMatrix();
        }

        return this._values;
    }

    /**
     * Values property setter
     * @param newValue {array}
     */
    set values(newValue) {
        this._values = newValue;
    }

    /**
     * Vector add function
     * @param vector {vector}
     * @returns vector
     */
    add(vector) {
    }

    /**
     * Remove v2 from v1
     * @param vector {vector}
     * @returns vector
     */
    remove(vector) {

    }

    /**
     * Multiply two vectors togeather
     * @param vector {vector}
     * @returns vector
     */
    multiply(vector) {

    }

    /**
     * Set the vector values
     * @param args {array};
     */
    set(...args) {
        this.values = args;
        return this;
    }

    /**
     * This function creates a new vector as a copy with the same values.
     */
    copy() {
        const result = new Vector();
        result.values = this.values.splice(0);
        return result;
    }

    /**
     * Function used to create the value matrix
     * @private
     * @returns {Array}
     */
    _createMatrix() {
        return [];
    }
}

export class Vector2 extends Vector {
    /**
     * Get x value of the vector
     * @returns {*}
     */
    get x() {
        return this.values[0];
    }

    /**
     * Set x value of the vector
     * @param newValue
     */
    set x(newValue) {
        this.values[0] = newValue;
    }

    /**
     * Get the y value of the vector
     * @returns {*}
     */
    get y() {
        return this.values[1];
    }

    /**
     * Set the y value of the vector
     * @param newValue
     */
    set y(newValue) {
        this.values[1] = newValue;
    }

    /**
     * This function creates a new vector as a copy with the same values.
     */
    copy() {
        const result = new Vector2();
        result.values = this.values.splice(0);
        return result;
    }
    
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    /**
     * Function used to create the value matrix
     * @private
     * @returns {Array[2]}
     */
    _createMatrix() {
        return [0, 0];
    }
}

export class Vector4 extends Vector2 {
    /**
     * Get the width value from the values matrix
     * @returns {*}
     */
    get width() {
        return this.values[2];
    }

    /**
     * Set the width value on the values matrix
     * @param newValue
     */
    set width(newValue) {
        this.values[2] = newValue;
    }

    /**
     * Get the height value from the values matrix
     * @returns {*}
     */
    get height() {
        return this.values[3];
    }

    /**
     * Set the height value on the values matrix
     * @param newValue
     */
    set height(newValue) {
        this.values[3] = newValue;
    }

    /**
     * This function creates a new vector as a copy with the same values.
     */
    copy() {
        const result = new Vector4();
        result.values = this.values.splice(0);
        return result;
    }

    /**
     * Function used to create the value matrix
     * @private
     * @returns {Array[4]}
     */
    _createMatrix() {
        return [0, 0, 0, 0];
    }
}

/**
 * padding is a vector4 data structure but uses left, top, right and bottom as values
 */
export class Padding extends Base {
    /**
     * data getter, defaults padding to 0, 0, 0, 0
     * @returns {array[4]}
     */
    get data() {
        return this.getProperty("data", () => [0, 0, 0, 0]);
    }

    /**
     * data setter
     * @param newValue
     */
    set data(newValue) {
        this.setProperty("data", newValue);
    }

    /**
     * get left value
     * @returns {number}
     */
    get left() {
        return this.data[0];
    }

    /**
     * set left value
     * @param newValue
     */
    set left(newValue) {
        this.data[0] = newValue;
    }

    /**
     * get top value
     * @returns {number}
     */
    get top() {
        return this.data[1];
    }

    /**
     * set top value
     * @param newValue
     */
    set top(newValue) {
        this.data[1] = newValue;
    }

    /**
     * get right value
     * @returns {number}
     */
    get right() {
        return this.data[2];
    }

    /**
     * set right value
     * @param newValue
     */
    set right(newValue) {
        this.data[2] = newValue;
    }

    /**
     * get bottom value
     * @returns {number}
     */
    get bottom() {
        return this.data[3];
    }

    /**
     * set bottom value
     * @param newValue
     */
    set bottom(newValue) {
        this.data[3] = newValue;
    }
    
    set(...args) {
        if (args.length === 1) {
            this._data = [args[0], args[0], args[0], args[0]];
        }
        else if (args.length === 4) {
            this._data = args;
        }
        else {
            throw new Error("padding set parameters must have either 1 or 4 values");
        }
    }
}