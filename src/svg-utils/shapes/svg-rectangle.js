import {Rectangle} from "./../../shapes/rectangle.js"
import {unitToPixel} from "./../pixel-helper.js";
import {createElement} from "./../svg-create.js";

/**
 * SVG Rectangle shape
 */
export class SvgRectangle extends Rectangle {
    /**
     * Create the svg element to render
     * @returns {rect}
     */
    async render() {
        const result = createElement("rect", {
            x: unitToPixel(this.location.x + this.padding.left),
            y: unitToPixel(this.location.y + this.padding.top),
            width: unitToPixel(this.width - this.padding.right),
            height: unitToPixel(this.height - this.padding.bottom)
        });
        
        result.style.fill = this.background;
        return result;
    }
}