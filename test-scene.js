import {SvgRectangle} from "./src/svg-utils/shapes/svg-rectangle.js"

export function createTestScene(scene) {
    const rect = SvgRectangle.create(2, 1);
    rect.location.set(1,1);
    rect.render();
}