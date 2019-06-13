import {Canvas} from "./svg-canvas.js";
import {createSvg} from "./../svg-utils/create.js";

/**
 * This is a svg canvas class responsible for rendering svg scenes
 */
export class SvgCanvas extends Canvas {
    /**
     * Svg getter, if no svg exists, it will create one for you
     * @returns {SVGElement}
     */
    get svg() {
        if (this._svg == null) {
            this._svg = createSvg();
        }
        return this._svg;
    }

    /**
     * Svg setter, will aquire additional properties like width and height form the svg you give.
     * @param newValue {SVGElement}
     */
    set svg(newValue) {
        this._svg = newValue;

        if (this._svg != null) {
            this.width = this._svg.offsetWidth;
            this.height = this._svg.offsetHeight;
        }
    }

    /**
     * @constructor
     * @param width {number/percentage}
     * @param height {number/percentage}
     */
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this._changeable = ["width", "height"];
    }

    /**
     * Draw the svg from the scene graph
     */
    render() {
        if (super.render() === false) return;
    }

    /**
     * Property changed event notifying changes to the canvas properties
     * @param name {string}: name of the property that has changed
     * @param value {value}: new value of the property
     */
    propertyChanged(name, value) {
        if (this._changeable.indexOf(name) != -1) {
            this.svg.setAttribute(name, value);
        }
    }
}