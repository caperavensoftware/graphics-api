import {Graphic} from "./graphic.js";
import {Vector2} from "../types.js";

export class Rectangle extends Graphic {
    static create(width, height) {
        const result = new Rectangle();
        result.bbox.set(0, 0, width, height);
        return result;
    }
    
    async getData() {
        return new Promise((resolve => {
            const bounds = this.bbox;
            const padding = this.padding;

            const data = [
                new Vector2().set(bounds.x + padding.left, bounds.y + padding.top),                 // top left
                new Vector2().set(bounds.width - padding.right, bounds.y + padding.top),            // top right
                new Vector2().set(bounds.width - padding.right, bounds.height - padding.bottom),    // bottom right
                new Vector2().set(bounds.x + padding.left, bounds.height - padding.bottom)          // bottom left
            ]

            resolve(data);
        }))
    }
}