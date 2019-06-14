import {Base} from "./../lib/base.js";
import {Vector4} from "./../types.js"

export class Graphic extends Base{
   get bbox() {
      this.getProperty("bbox", () => new Vector4())
   }
}