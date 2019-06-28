/**
 * This is a base class with some standard base features to inherit from
 */
export class Base {
    getProperty(name, callback) {
        const field = `_${name}`;
        if (this[field] == null) {
            this[field] = callback();
        }

        return this[field];
    }

    /**
     * This function is used by class property setters to change the value and notify the changes
     * @param name
     * @param value
     */
    setProperty(name, value, callback) {
        const field = `_${name}`;
        if (this[field] != null && this[field].dispose != null) {
            this[field].dispose();
        }

        this[field] = value;

        if (value != null && callback != null) {
            callback();
        }

        this.propertyChanged(name, value);
    }

    /**
     * Property changed event notifying changes to the svgCanvas properties
     * @param name {string}: name of the property that has changed
     * @param value {value}: new value of the property
     */
    propertyChanged(name, value) {

    }
}