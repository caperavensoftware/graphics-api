import {SvgRectangle} from "./src/svg-utils/shapes/svg-rectangle.js"

export async function createTestScene(scene) {
    return new Promise((resolve) => {
        scene.add(createRectangle(1, 1, 4, 2));
        resolve();
    });
}

function createRectangle(x, y, width, height) {
    const rect = SvgRectangle.create(width, height);
    rect.location.set(x, y);
    return rect;    
}