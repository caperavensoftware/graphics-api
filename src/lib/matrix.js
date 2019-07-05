export class MatrixFactory {
    static get type() {
        return {
            translate: "translate",
            scale: "scale",
            rotateX: "rotateX",
            rotateY: "rotateY",
            rotateZ: "rotateZ"
        }    
    }
    
    static get(type, ...args) {
        return MatrixFactory[type](...args);
    }

    static translate(x, y, z) {
        return [
            1, 0, 0, x,
            0, 1, 0, y,
            0, 0, 1, z,
            0, 0, 0, 1
        ]
    }

    static scale(x, y, z) {
        return [
            x, 0, 0, 0,
            0, y, 0, 0,
            0, 0, z, 0,
            0, 0, 0, 1
        ]
    }

    static rotateX(deg) {
        const cos = Math.cos(deg);
        const sin = Math.sin(deg); 

        return [
            1, 0, 0, 0,
            0, cos, -sin, 0,
            0, sin, cos, 0,
            0, 0, 0, 1
        ]
    }

    static rotateY() {
        const cos = Math.cos(deg);
        const sin = Math.sin(deg); 

        return [
            cos, 0, sin, 0,
            0, 1, 0, 0,
            -sin, 0, cos, 0,
            0, 0, 0, 1    
        ]
    }

    static rotateZ() {
        const cos = Math.cos(deg);
        const sin = Math.sin(deg); 

        return [
            cos, -sin, 0, 0,
            sin, cos, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1    
        ]
    }
}