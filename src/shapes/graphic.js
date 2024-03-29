import {Base} from "../lib/base.js";
import {Vector2, Vector4, Padding} from "../types.js"

/**
 * What is the graphic type, used to determine type of drawing strategy
 * @type {{path: number, vector: number}}
 */
export const GraphicType = {
   Vector: 0, 
   Path: 1
}

/**
 * This is a base class for shapes
 */
export class Graphic extends Base {
   /**
    * Define what kind of graphic this is
    * @default GraphicType.vector
    * @returns {GraphicType}
    */
   get type() {
      return GraphicType.Vector;
   }

   /**
    * bbox getter
    * @returns {*}
    */
   get bbox() {
      return this.getProperty("bbox", () => new Vector4().set(1, 1, 1, 1))
   }

   /**
    * bbox setter
    * @param newValue
    */
   set bbox(newValue) {
      this.setProperty("bbox", newValue);
   }

   /**
    * Get the top right screen coordinate of this graphic
    */
   get location() {
      return this.getProperty("location", () => new Vector2())
   }

   /**
    * Set the top right screen cooridnate of this graphic
    * @param newValue
    */
   set location(newValue) {
      this.setProperty("location", newValue);
   }

   /**
    * padding getter, default is zero padding
    * @returns {*}
    */
   get padding() {
      return this.getProperty("padding", () => new Padding());
   }

   /**
    * padding setter
    * @param newValue
    */
   set padding(newValue) {
      this.setProperty("padding", newValue);
   }

   /**
    * background setter, defaults to black
    * @returns {color}
    */
   get color() {
      return this.getProperty("color", () => "cornflowerblue");
   }

   /**
    * background setter
    * @param newValue
    */
   set color(newValue) {
      this.setProperty("color", newValue);
   }

   /**
    * Get the opacity value between 0 and 1
    */
   get opacity() {
      return this.getProperty("opacity", () => 1)
   }

   /**
    * Set opacity value between 0 and 1
    */
   set opacity(newValue) {
      this.setProperty("opacity", newValue);
   }

   /**
    * Static create function that allows piped expressions
    * @param args {object}: e.g. {width: 10, height: 10}
    * @returns {instance of the graphic}
    */
   static create(args) {
      const result = new this.prototype.constructor();

      if (args != null) {
         const keys = Object.keys(args);
         for (let key of keys) {
            result[key] = args[key];
         }
      }

      return result;
   }

   async getData() {
      return Promise.resolve();
   }
}