import {Base} from "./../lib/base.js";
import {Vector2, Vector4} from "./../types.js"

export class Graphic extends Base{
   get bbox() {
      return this.getProperty("bbox", () => new Vector4().set(1, 1, 1, 1))
   }

   set bbox(newValue) {
      this.setProperty("bbox", newValue);
   }

   get scale() {
      return this.getProperty("scale", () => new Vector2().set(1, 1));
   }

   set scale(newValue) {
      this.setProperty("scale", newValue);
   }

   constructor() {
      super();
      const v = this.bbox;
   }
}