import {Circle} from "./../../shapes/circle.js"
import {unitToPixel} from "../../lib/pixel-helper.js";
import {createElement} from "./../svg-create.js";

/**
 * Svg Circle shape
 */
export class SvgCircle extends Circle {
    /**
     * Create the dc element to render
     * @returns {circle}
     */
    async render() {
        const result = createElement("circle", {
            cx: unitToPixel(this.location.x + this.padding.left),
            cy: unitToPixel(this.location.y + this.padding.top),
            r: unitToPixel(this.radius - this.padding.right - this.padding.bottom),
        });

        result.style.fill = this.background;
        return result;
    }
}