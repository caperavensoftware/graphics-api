import {Rectangle} from "./../../shapes/rectangle.js"
import {unitToPixel} from "./../pixel-helper.js";
import {createElement} from "./../svg-create.js";

export class SvgRectangle extends Rectangle {
    async render() {
        const result = createElement("rect", {
            x: unitToPixel(this.location.x),
            y: unitToPixel(this.location.y),
            width: unitToPixel(this.width),
            height: unitToPixel(this.height)
        });
        
        result.style.fill = this.background;
        return result;
    }
}