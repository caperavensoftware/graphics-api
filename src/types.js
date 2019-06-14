/**
 * Vector base class
 */
class Vector {
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
     * @param v1 {vector}
     * @param v2 {vector}
     * @returns vector
     */
    add(v1, v2) {

    }

    /**
     * Remove v2 from v1
     * @param v1 {vector}
     * @param v2 {vector}
     * @returns vector
     */
    remove(v1, v2) {

    }

    /**
     * Multiply two vectors togeather
     * @param v1 {vector}
     * @param v2 {vector}
     * @returns vector
     */
    multiply(v1, v2) {

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
     * Function used to create the value matrix
     * @private
     * @returns {Array[2]}
     */
    _createMatrix() {
        return [2];
    }
}

export class Vector4 extends Vector2 {
    /**
     * Get the width value from the values matrix
     * @returns {*}
     */
    get width() {
        return this.values[3];
    }

    /**
     * Set the width value on the values matrix
     * @param newValue
     */
    set width(newValue) {
        this.values[3] = newValue;
    }

    /**
     * Get the height value from the values matrix
     * @returns {*}
     */
    get height() {
        return this.values[4];
    }

    /**
     * Set the height value on the values matrix
     * @param newValue
     */
    set height(newValue) {
        this.values[4] = newValue;
    }

    /**
     * Function used to create the value matrix
     * @private
     * @returns {Array[4]}
     */
    _createMatrix() {
        return [4];
    }
}