import {Vector2} from "./src/types.js";

export async function createTestScene(scene) {
    return new Promise(async (resolve) => {
        scene.add(await createRectangle(1, 1, 4, 2, "coral"));
        scene.add(await createCircle(8, 2, 2, "hotpink"));
        scene.add(await createLine(1, 1, 5, 3, "white"));
        resolve();
    });
}

async function createRectangle(x, y, width, height, color) {
    const module = await import("./src/utils-svg/shapes/svg-rectangle.js");
    const result = module.SvgRectangle.create(width, height);
    result.location.set(x, y);
    result.color = color;
    return result;
}

async function createCircle(x, y, r, color) {
    let module = await import("./src/utils-svg/shapes/svg-circle.js");
    const result = module.SvgCircle.create(r);
    result.location.set(x, y);
    result.color = color;
    return result;
}

async function createLine(x1, y1, x2, y2, color) {
    let module = await import("./src/utils-svg/shapes/svg-line.js");
    const result = module.SvgLine.create(Vector2.create(x1, y1), Vector2.create(x2, y2));
    result.color = color;
    return result;
}