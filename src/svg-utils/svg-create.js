const namespace = "http://www.w3.org/2000/svg";

/**
 * SVG Utility that creates a svg element
 * @returns {SVGElement}
 */
export function createSvg() {
    return document.createElementNS(namespace, "svg");
}

export function createElement(tag, attr) {
    const element = document.createElementNS(namespace, tag);
    
    const keys = Object.keys(attr || {});
    for (let key of keys) {
        element.setAttribute(key, attr[key]);
    }
    
    return element;
}