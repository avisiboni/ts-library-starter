import { multiply} from "../src";


describe('multiply', () => {
    test('input not as a number', () => {
        expect(()=> multiply('a' as any, -2)).toThrow('The provided input must be a number');
    });
    it('should correctly multiply two positive numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    it('should correctly multiply a positive and a negative number', () => {
        expect(multiply(-2, 3)).toBe(-6);
        expect(multiply(2, -3)).toBe(-6);
    });

    it('should correctly multiply two negative numbers', () => {
        expect(multiply(-2, -3)).toBe(6);
    });

    it('should return 0 when multiplying by zero', () => {
        expect(multiply(0, 3)).toBe(0);
        expect(multiply(2, 0)).toBe(0);
        expect(multiply(0, 0)).toBe(0);
    });
});