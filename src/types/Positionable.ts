export default class Positionable {
    private y: number;
    private x: number;

    constructor(y: number, x: number) {
        this.y = y;
        this.x = x;
    }

    getY(): number { return this.y }
    getX(): number { return this.x }

    setY(y: number): void { this.y = y }
    setX(x: number): void { this.x = x }
}
