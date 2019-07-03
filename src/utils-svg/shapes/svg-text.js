import {Text} from "./../../shapes/text.js";
import {unitToPixel} from "../../lib/pixel-helper.js";
import {createElement} from "../svg-create.js";

export class SvgText extends Text {
    /**
     * Create the dc element to render
     * @returns {rect}
     */
    async render() {
        const result = createElement("text", {
            x: unitToPixel(this.location.x + this.padding.left),
            y: unitToPixel(this.location.y + this.padding.top),
        });
        result.textContent = this.string;
        result.style.fill = this.color;
        result.style.fontSize = unitToPixel(this.size);
        return result;
    }
}