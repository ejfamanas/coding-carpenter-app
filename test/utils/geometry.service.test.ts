import GeometryService, { Point } from '../../src/utils/geometry.service';
import { expect, describe, it } from '@jest/globals';
describe('GeometryService', () => {
    describe('getAngle', () => {
        it('should return 0 for zero angle (points are the same)', () => {
            const start: Readonly<Point> = { x: 0, y: 0 };
            const end: Readonly<Point> = { x: 0, y: 0 };
            expect(GeometryService.getAngle(start, end)).toBe(0);
        });

        it('should return positive angle for counter-clockwise rotation', () => {
            const start: Readonly<Point> = { x: 0, y: 0 };
            const end: Readonly<Point> = { x: 1, y: 1 };
            expect(GeometryService.getAngle(start, end)).toBeGreaterThan(0);
        });

        it('should return negative angle for clockwise rotation', () => {
            const start: Readonly<Point> = { x: 0, y: 0 };
            const end: Readonly<Point> = { x: -1, y: 1 };
            expect(GeometryService.getAngle(start, end)).toBeLessThan(0);
        });

        it('should return π/2 for right angle (90 degrees)', () => {
            const start: Readonly<Point> = { x: 0, y: 0 };
            const end: Readonly<Point> = { x: 1, y: 0 };
            expect(GeometryService.getAngle(start, end)).toBeCloseTo(Math.PI / 2);
        });

        it('should return π for straight line (180 degrees)', () => {
            const start: Readonly<Point> = { x: 0, y: 0 };
            const end: Readonly<Point> = { x: -1, y: 0 };
            expect(GeometryService.getAngle(start, end)).toBeCloseTo(Math.PI);
        });
    });
});