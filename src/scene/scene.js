/**
 * Base class for scene based objects
 */
import {Base} from "./../lib/base.js";

class SceneBase extends Base {
    /**
     * Items getter
     * @returns {Array}
     */
    get items() {
        return this.getProperty("items", () => []);
    }

    /**
     * Items setter
     * @param newValue
     */
    set items(newValue) {
        for (let item of this.items) {
            item.dispose();
        }

        this._items = newValue;
    }

    dispose() {
        this.items = null;
    }

    /**
     * Standard render function that tells each child to render itself.
     */
    render() {
        for (let item of this.items) {
            item.render();
        }
    }

    /**
     * Add a scene item to the scene for rendering
     * @param child
     */
    add(child) {
        this.items.push(child);
    }

    /**
     * Remove a child from the scene
     * @param child
     */
    remove(child) {
        child.dispose();
        const index = this.items.indexOf(child);
        if (index != -1) {
            this.items.splice(index, 1);
        }
    }
}

/**
 * Scene object used on svgCanvas to render objects
 */
export class Scene extends SceneBase {
    render() {
        super.render();
    }
}

/**
 * Scene group object used to group other items.
 * If the group is changed, the children are also changed.
 * If the group is not visible the children do not get rendered.
 */
export class SceneGroup extends SceneBase {
    constructor() {
        super();
        this.isVisible = true;
    }

    render() {
        if (this.isVisible === false) return;
        super.render();
    }
}