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
            x1: unitToPixel(this.start.x),
            y1: unitToPixel(this.start.end),
            x2: unitToPixel(this.end.x),
            y2: unitToPixel(this.end.y)
        });
        
        result.style.stroke = this.color;
        return result;
    }
}