export async function createTestScene(scene) {
    return new Promise(async (resolve) => {
        scene.add(await createRectangle(1, 1, 4, 2, "coral"));
        scene.add(await createCircle(8, 2, 2, "hotpink"));
        resolve();
    });
}

async function createRectangle(x, y, width, height, background) {
    const module = await import("./src/svg-utils/shapes/svg-rectangle.js");
    const result = module.SvgRectangle.create(width, height);
    result.location.set(x, y);
    result.background = background;
    return result;
}

async function createCircle(x, y, r, background) {
    const module = await import("./src/svg-utils/shapes/svg-circle.js");
    const result = module.SvgCircle.create(r);
    result.location.set(x, y);
    result.background = background;
    return result;
}