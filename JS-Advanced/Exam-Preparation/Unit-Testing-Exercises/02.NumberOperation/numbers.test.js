const {expect} = require('chai');
const numberOperations = require('./numbers');

describe('Numbers', () => {

    //powNumber
    describe('powNumbers', () => {
        it('Calculation of the Power > 0', () => {
            expect(numberOperations.powNumber(5)).to.equal(25);
        });

        it("The input isNaN throw", function () {
            expect(function () {
                numberOperations.numberChecker('100F')
            }).to.throw();
        });

        it('Calculation of the Power = 0 ', () => {
            expect(numberOperations.powNumber(0)).to.equal(0);
        });

        it('Calculation of the Power < 0 ', () => {
            expect(numberOperations.powNumber(-5)).to.equal(25);
        });
    });

    //numberChecker
    describe('numberChecker', () => {

        it("The input is Object and throw", function () {
            expect(function () {
                numberOperations.numberChecker({})
            }).to.throw();
        });
        it("The input is array and throw", function () {
            expect(function () {
                numberOperations.numberChecker([1, 2])
            }).to.throw();
        });
        it("The input is string and  throw", function () {
            expect(function () {
                numberOperations.numberChecker('dimitrichko')
            }).to.throw();
        });

        it('The input is a number!', () => {
            let input = Number(150);
            expect(isNaN(numberOperations.numberChecker(input))).to.equal(true);
        });

        it('The input is >100 !', () => {
            let input = Number(150);
            expect(numberOperations.numberChecker(input)).to.equal('The number is greater or equal to 100!');
        });

        it('The input is <100 !', () => {
            let input = Number(50);
            expect(numberOperations.numberChecker(input)).to.equal('The number is lower than 100!');
        });

        it("The input is == 100", function () {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        });

    });

    //sumArrays
    describe('sumArrays', () => {
        it("valid arrays", function () {
            let arr1 = [1, 2, 3];
            let arr2 = [7];
            expect(numberOperations.sumArrays(arr1, arr2)).to.eql([8, 2, 3]);
        });
        it("equal valid arrays", function () {
            let arr1 = [1, 2, 3];
            let arr2 = [1, 1, 1];
            expect(numberOperations.sumArrays(arr1, arr2)).to.eql([2, 3, 4]);
        });
        it("empty arrays", function () {
            let arr1 = [];
            let arr2 = [];
            expect(numberOperations.sumArrays(arr1, arr2)).to.eql([]);
        });
        it("string arrays", function () {
            let arr1 = ['a', 'b'];
            let arr2 = ['a', 'b'];
            expect(numberOperations.sumArrays(arr1, arr2)).to.eql(['aa', 'bb']);
        });
    });
});