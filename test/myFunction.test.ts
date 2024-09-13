import myFunction from "../src/utils/myFunction";
import {describe, it, expect} from "@jest/globals";

describe('myfunction', () => {
    it('adds two numbers', () => {
        expect(myFunction(2, 3)).toBe(5);
    });

    it('adds two negative numbers', () => {
        expect(myFunction(-2, -3)).toBe(-5);
    });

    it('adds a positive and a negative number', () => {
        expect(myFunction(2, -3)).toBe(-1);
    });
});