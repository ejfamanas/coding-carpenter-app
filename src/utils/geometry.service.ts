export interface Point {
    x: number;
    y: number;
}

export default class GeometryService {
    /**
     * Returns the angle between two points in the plane.
     * @param start The starting point.
     * @param end The ending point.
     * @returns The angle in radians, positive for counter-clockwise and negative for clockwise.
     */
    static getAngle(start: Readonly<Point>, end: Readonly<Point>): number {
        return Math.atan2(end.y - start.y, end.x - start.x);
    }

    /**
     * Returns the Euclidean distance between two points in the plane.
     * @param start The starting point.
     * @param end The ending point.
     * @returns The distance between the points.
     */
    static getDistanceBetweenPoints(start: Readonly<Point>, end: Readonly<Point>): number {
        return Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
    }
    /**
     * Returns the midpoint between two points in the plane.
     * @param start The starting point.
     * @param end The ending point.
     * @returns The midpoint between the points.
     */
    static getMidpoint(start: Readonly<Point>, end: Readonly<Point>): Readonly<Point> {
        return {
            x: (start.x + end.x) / 2,
            y: (start.y + end.y) / 2,
        };
    }
    /**
     * Returns the vector between two points.
     * @param start The starting point.
     * @param end The ending point.
     * @returns The vector from start to end.
     */
    static getVector(start: Readonly<Point>, end: Readonly<Point>): Readonly<[number, number]> {
        return [end.x - start.x, end.y - start.y];
    }

    /**
     * Returns the perimeter of a polygon with the given side lengths.
     * @param sideLengths The side lengths of the polygon.
     * @returns The perimeter of the polygon.
     */
    static getPerimeter(...sideLengths: number[]): number {
        return sideLengths.reduce((total, sideLength) => total + sideLength, 0);
    }

    /**
     * Returns the area of a square with the given side lengths.
     * @param sideLengths The side lengths of the square.
     * @returns The area of the square.
     */
    static getSquareArea(...sideLengths: number[]): number {
        if (sideLengths.length !== 2) {
            throw new Error('Expected 2 side lengths');
        } else {
            return sideLengths[0] * sideLengths[1];
        }
    }
    /**
     * Returns the area of a right triangle with the given side lengths.
     * @param sideLengths The side lengths of the triangle, in the order of the hypotenuse and the two legs.
     * @returns The area of the triangle.
     */
    static getTriangleArea(...sideLengths: number[]): number {
        return GeometryService.getSquareArea(...sideLengths) / 2;
    }
}