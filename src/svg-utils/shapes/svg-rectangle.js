import {Rectangle} from "./../../shapes/rectangle.js"

export class SvgRectangle extends Rectangle {
    async render() {
        const data = await this.getData();
        console.log(data);
        // draw svg from the data
    }
}