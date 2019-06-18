/**
 * SVG Utility that creates a svg element
 * @returns {SVGElement}
 */
export function createSvg() {
    return document.createElementNS("http://www.w3.org/2000/svg", "svg");
}