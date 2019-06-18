import {Graphic} from "./graphic.js";
import {Vector2} from "../types.js";

export class Rectangle extends Graphic {
    static create(width, height) {
        const result = new this.prototype.constructor();
        result.bbox.set(0, 0, width, height);
        return result;
    }
    
    async getData() {
        return new Promise((resolve => {
            const bounds = this.bbox;
            const padding = this.padding;
            const location = this.location;

            const data = [
                new Vector2().set(bounds.x + padding.left, bounds.y + padding.top).add(location),                 // top left
                new Vector2().set(bounds.width - padding.right, bounds.y + padding.top).add(location),            // top right
                new Vector2().set(bounds.width - padding.right, bounds.height - padding.bottom).add(location),    // bottom right
                new Vector2().set(bounds.x + padding.left, bounds.height - padding.bottom).add(location)          // bottom left
            ]

            resolve(data);
        }))
    }
}