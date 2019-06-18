/**
 * This is a base class to extend for platform spesific cameras.
 */
import {Base} from "../lib/base.js";
import {Vector4} from "../types.js";

export class Camera extends Base{
    /**
     * Viewport getter
     * The viewport determines what the camera can see.
     * This may be the same size as the canvas or less
     */
    get viewPort() {
        this.getProperty("viewPort", () => new Vector4());
    }

    /**
     * Viewprot setter
     * @param newValue
     */
    set viewPort(newValue) {
        this.setProperty("viewPort", newValue);
    }

    /**
     * Given a scene, determine what graphics is visible and ready for drawing.
     * The canvas should use this during rendering if applicable.
     * @param scene
     * @returns {array}
     */
    getVisibleItems(scene) {

    }

    /**
     * Given a graphic object determine if the item is visible or not
     * @param graphic {Graphic}
     */
    isGraphicVisible(graphic) {
        
    }
}