import {SvgRectangle} from "./src/svg-utils/shapes/svg-rectangle.js"

export function createTestScene(scene) {
    const rect = SvgRectangle.create(2, 1);
    rect.padding.set(0.1);
    rect.render();
}