import {Polygon} from "./../../shapes/polygon.js"
import {unitToPixel} from "../../lib/pixel-helper.js";
import {createElement} from "../svg-create.js";

/**
 * SVG Rectangle shape
 */
export class SvgPolygon extends Polygon {
    /**
     * Create the dc element to render
     * @returns {rect}
     */
    async render() {
        const points = await this.pointsToString();
        const result = createElement("polygon", {
            points: points
        });
        
        result.style.fill = this.color;
        return result;
    }

    async pointsToString() {
        const result = [];
        for (let point of this.points) {
            result.push([unitToPixel(this.location.x + point.x), unitToPixel(this.location.y + point.y)].join(" "));
        }
        return result.join(",");
    }
}