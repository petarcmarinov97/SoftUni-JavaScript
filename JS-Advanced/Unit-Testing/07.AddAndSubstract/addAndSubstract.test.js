let {expect} = require('chai');
let createCalculator = require('./addAndSubstract')

describe('createCalculator', () => {
    it('add number should work', () => {
        let calculator = createCalculator();
        calculator.add(1);
        let expectResult = 1;
        let actualResult = calculator.get();
        expect(actualResult).to.be.equal(expectResult);
    });
    it('substract number should work', () => {
        let calculator = createCalculator();
        calculator.subtract(1);
        let expectResult = -1;
        let actualResult = calculator.get();
        expect(actualResult).to.be.equal(expectResult);
    });
    it('add and substract multiple numbers should work', () => {
        let calculator = createCalculator();
        calculator.add(1);
        calculator.subtract(1);
        calculator.add(2);
        calculator.subtract(5);
        let expectResult = -3;
        let actualResult = calculator.get();
        expect(actualResult).to.be.equal(expectResult);
    });
    it('add and substract multiple numbers and numbers as string should work', () => {
        let calculator = createCalculator();
        calculator.add('1');
        let expectResult = 1;
        let actualResult = calculator.get();
        expect(actualResult).to.be.equal(expectResult);
    });
    it('add and substract multiple numbers and numbers as string should work', () => {
        let calculator = createCalculator();
        calculator.add('a');
        calculator.subtract(1);
        calculator.add('2');
        calculator.subtract(5);
        let actualResult = calculator.get();
        expect(actualResult).to.be.NaN;
    });
    it('should return module', () => {
        let calculator = createCalculator();
        expect(typeof calculator).to.equals('object');
    });
    
});