/**
    This file deals with functions helping with unit conversions beween graphics api units and pixels. 
*/

/**
 * Convert Vector2 units to Vector2 pixels
 * @param vector {Vector2}
 */
export function vector2ToPx(vector) {
    if (vector.px != true) {
        vector.px = true;
        vector.x = `${unitToPixel(vector.x)}px`;
        vector.y = `${unitToPixel(vector.y)}px`;
    }
}

export function unitToPixel(unit) {
    return unit * 25;
}