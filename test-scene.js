import {SvgRectangle} from "./src/svg-utils/shapes/svg-rectangle.js"

export async function createTestScene(scene) {
    setTimeout(() => {
        scene.add(createRectangle(1, 1, 4, 2));
    }, 0)
}

function createRectangle(x, y, width, height) {
    const rect = SvgRectangle.create(width, height);
    rect.location.set(x, y);
    rect.render();
    return rect;    
}