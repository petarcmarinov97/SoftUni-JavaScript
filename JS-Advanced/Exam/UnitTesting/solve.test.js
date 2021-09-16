const {
    expect
} = require('chai');
const testNumbers = require('./solve')

describe('Numbers', () => {

    //sumNumbers
    describe('sumNumber', () => {
        it('Check for type ', () => {
            expect(testNumbers.sumNumbers(1, 3)).to.equal((4).toFixed(2));
        });

        it('Check for type ', () => {
            expect(testNumbers.sumNumbers(1, -5)).to.equal((-4).toFixed(2));
        });

        it('Check for type ', () => {
            expect(testNumbers.sumNumbers(1, 0)).to.equal((1).toFixed(2));
        });

        it('Check for type ', () => {
            expect(testNumbers.sumNumbers(1, '5')).to.equal(undefined);
        });

        it('Check for type ', () => {
            expect(testNumbers.sumNumbers('1', '5')).to.equal(undefined);
        });

        it('Check for type ', () => {
            expect(testNumbers.sumNumbers(1, 2.36)).to.equal((3.36).toFixed(2));
        });
    });

    //numberChecker
    describe('numberChecker', () => {

        it("The input is Object and throw", function () {
            expect(function () {
                testNumbers.numberChecker({})
            }).to.throw();
        });

        it("The input is array and throw", function () {
            expect(function () {
                testNumbers.numberChecker([1, 2])
            }).to.throw();
        });

        it('Check for odd ', () => {
            expect(testNumbers.numberChecker(4)).to.equal('The number is even!');
        });

        it('Check for odd ', () => {
            expect(testNumbers.numberChecker(5)).to.equal('The number is odd!');
        });
    });

    //averageSumArray
    describe('averageSumArray', () => {
        it('return avg', () => {
            let sum=0;
            let arr=[1,2,3,4,5];
            for (const number of arr) {
                sum+=number
            }
            let avg=sum/arr.length;
    expect(testNumbers.averageSumArray(arr)).to.equal(avg)
        });
    });
});