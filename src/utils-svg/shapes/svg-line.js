import {Line} from "./../../shapes/line.js"
import {unitToPixel} from "../../lib/pixel-helper.js";
import {createElement} from "../svg-create.js";

/**
 * SVG Rectangle shape
 */
export class SvgLine extends Line {
    /**
     * Create the dc element to render
     * @returns {rect}
     */
    async render() {
        const result = createElement("line", {
            x1: unitToPixel(this.location.x + this.start.x + this.padding.left),
            y1: unitToPixel(this.location.y + this.start.end + this.padding.top),
            x2: unitToPixel(this.location.x + this.end.x - this.padding.left),
            y2: unitToPixel(this.location.y + this.end.y - this.padding.top)
        });
        
        result.style.opacity = this.opacity;
        result.style.stroke = this.color;
        return result;
    }
}