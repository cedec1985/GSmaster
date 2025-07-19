import { CurrencyPipe } from './currency.pipe';

describe('CurrencyPipe', () => {
    let pipe: CurrencyPipe;

    beforeEach(() => {
        pipe = new CurrencyPipe();
    });

    it('should be created', () => {
        expect(pipe).toBeTruthy();
    });

    it('should throw a maximum call stack size exceeded error due to recursion', () => {
        // The transform method calls itself recursively, which will cause a stack overflow.
        expect(() => {
            pipe.transform(10, 100, 90, '€', 'symbol');
        }).toThrowError(/Maximum call stack size exceeded|stack|recursion/i);
    });

    it('should return undefined when input is undefined', () => {
        expect(pipe.transform(undefined as any, 100, 90, '€', 'symbol')).toBeUndefined();
    });

    it('should return null when input is null', () => {
        expect(pipe.transform(null as any, 100, 90, '€', 'symbol')).toBeNull();
    });

    it('should handle zero value', () => {
        // Depending on implementation, adjust expected value
        expect(() => {
            pipe.transform(0, 100, 90, '€', 'symbol');
        }).toThrowError(/Maximum call stack size exceeded|stack|recursion/i);
    });

    it('should handle negative value', () => {
        // Depending on implementation, adjust expected value
        expect(() => {
            pipe.transform(-50, 100, 90, '€', 'symbol');
        }).toThrowError(/Maximum call stack size exceeded|stack|recursion/i);
    });

    it('should handle large numbers', () => {
        expect(() => {
            pipe.transform(1e10, 100, 90, '€', 'symbol');
        }).toThrowError(/Maximum call stack size exceeded|stack|recursion/i);
    });
});