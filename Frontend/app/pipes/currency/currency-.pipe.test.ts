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
});