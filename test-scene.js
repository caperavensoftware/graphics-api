import {Vector2} from "./src/types.js";
import {MatrixFactory} from "./src/lib/matrix.js";

export async function createTestScene(scene) {
    return new Promise(async (resolve) => {
        scene.add(await createRectangle(1, 1, 4, 2, "coral"));
        scene.add(await createLine(1, 1, 5, 3, "white"));
        scene.add(await createPolygon([1, 1, 5, 1, 5, 3, 1, 3], "cornflowerblue", [0, 3]));
        scene.add(await createText("Hello SVG", 0.64, "gray"));
        scene.add(await createCircle(5, 2, 2, "hotpink", 0.5));
        resolve();
    });
}

async function createRectangle(x, y, width, height, color, opacity = 1) {
    const module = await import("./src/utils-svg/shapes/svg-rectangle.js");
    const result = module.SvgRectangle.create(width, height);
    result.location.set(x, y);
    result.color = color;
    result.opacity = opacity;
    return result;
}

async function createCircle(x, y, r, color, opacity = 1) {
    let module = await import("./src/utils-svg/shapes/svg-circle.js");
    const result = module.SvgCircle.create(r);
    result.location.set(x, y);
    result.color = color;
    result.opacity = opacity;
    return result;
}

async function createLine(x1, y1, x2, y2, color, opacity = 1) {
    let module = await import("./src/utils-svg/shapes/svg-line.js");
    const result = module.SvgLine.create(x1, y1, x2, y2);
    result.color = color;
    result.opacity = opacity;
    return result;
}

async function createPolygon(points, color, location, opacity = 1) {
    let module = await import("./src/utils-svg/shapes/svg-polygon.js");

    const vectors = [];
    const count = points.length;
    for (let i = 0; i < count; i += 2) {
        vectors.push(Vector2.create(points[i], points[i + 1]));
    }

    const result = module.SvgPolygon.create(vectors);
    result.color = color;
    result.opacity = opacity;
    result.location = Vector2.create(location[0], location[1]);
    return result;
}

async function createText(text, size, color, opacity = 1) {
    let module = await import("./src/utils-svg/shapes/svg-text.js");
    const result = module.SvgText.create(text, size);
    result.color = color;
    result.opacity = opacity;

    const matrix = MatrixFactory.get(MatrixFactory.type.translate, 2, 3, 4);
    console.log(matrix);

    return result;
}