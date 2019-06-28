import {Canvas} from "./../canvas/canvas.js";
import {createContext} from "./svg-create.js";
import {SvgCamera} from "./svg-camera.js";

/**
 * This is a dc svgCanvas class responsible for rendering dc scenes
 */
export class SvgCanvas extends Canvas {
    /**
     * Svg getter, if no display context exists, it will create one for you
     * @returns {SVGElement}
     */
    get dc() {
        return this.getProperty("dc", createContext);
    }

    /**
     * Svg setter, will aquire additional properties like width and height form the display context you give.
     * @param newValue {SVGElement}
     */
    set dc(newValue) {
        this._svg = newValue;

        if (this._svg != null) {
            this.width = this._svg.offsetWidth;
            this.height = this._svg.offsetHeight;
        }
    }

    /**
     * Camera getter. will be set by default to fit the entire dc svgCanvas width and height.
     * @returns {SvgCamera}
     */
    get camera() {
        return this.getProperty("camera", () => {
            const result = SvgCamera.create();
            result.viewPort.set(0, 0, this.width, this.height);
            return result;
        });
    }

    /**
     * Camera setter
     * @param newValue
     */
    set camera(newValue) {
        this.setProperty("camera", newValue);    
    }
    
    /**
     * @constructor
     * @param width {number/percentage}
     * @param height {number/percentage}
     */
    constructor(width, height, background) {
        super();
        this._attributes = ["width", "height"];
        this._styleProperties = ["background"];
        this.width = width;
        this.height = height;
        this.background = background;
    }

    /**
     * Destroy object
     */
    dispose() {
        this.camera = null;
        this.dc = null;
    }

    /**
     * Draw the dc from the scene graph
     */
    async render() {
        if (super.render() === false) return;
        
        const visibleItems = this.camera.getVisibleItems(this.scene);
        for (let item of visibleItems) {
            const element = await item.render();
            this.dc.appendChild(element);
        }
    }

    /**
     * Property changed event notifying changes to the svgCanvas properties
     * @param name {string}: name of the property that has changed
     * @param value {value}: new value of the property
     */
    propertyChanged(name, value) {
        if (this._attributes.indexOf(name) != -1) {
            this.dc.setAttribute(name.toLowerCase(), value);
        }

        if (this._styleProperties.indexOf(name) != -1) {
            this.dc.style[name.toLowerCase()] = value;
        }
    }
}