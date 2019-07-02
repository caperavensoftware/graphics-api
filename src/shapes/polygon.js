import {Graphic} from "./graphic.js";

export class Polygon extends Graphic {
    static create() {
        return super.create();
    }

    async getData() {
        return new Promise(resolve => {
            resolve();
        });
    }
}
