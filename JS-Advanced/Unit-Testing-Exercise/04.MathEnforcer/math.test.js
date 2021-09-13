const {expect}=require('chai');
const mathEnforcer=require('./math')

describe('mathEnforcer',()=>{

    describe('addFive',()=>{

    it("should return undifined",()=>{
    expect(mathEnforcer.addFive(`Pesho`)).to.be.equal(undefined);
    });

    it("should return undifined",()=>{
    expect(mathEnforcer.addFive(`55`)).to.be.equal(undefined);
    });

    it("should return undifined",()=>{
    expect(mathEnforcer.addFive(-5)).to.be.equal(0);
    });

    it("should return undifined",()=>{
        expect(mathEnforcer.addFive(15)).to.be.equal(20);
    });

    it("should return correct result for floating point parameter", function () {
           expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
       })

    });

    describe('subtractTen',()=>{

    it("should return undifined",()=>{
        expect(mathEnforcer.subtractTen(`Pesho`)).to.be.equal(undefined);
    });

    it("should return undifined",()=>{
        expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
    });

    it("should return undifined",()=>{
        expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
    });

    it("should return correct result for floating point parameter", function () {
            expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
        })
    });

    describe('sum',()=>{

    it("should return undifined",()=>{
        expect(mathEnforcer.sum(`Pesho`,3)).to.be.equal(undefined);
    });

    it("should return undifined",()=>{
        expect(mathEnforcer.sum(`3`,`3`)).to.be.equal(undefined);
    });

    it("should return undifined",()=>{
        expect(mathEnforcer.sum(`Pesho`,`Gosho`)).to.be.equal(undefined);
    });

    it("should return undifined",()=>{
        expect(mathEnforcer.sum(3,`Pesho`)).to.be.equal(undefined);
    });

    it("should return undifined",()=>{
        expect(mathEnforcer.sum(15,3)).to.be.equal(18);
    })

    it("should return correct result for floating point parameters", function () {
            expect(mathEnforcer.sum(2.7, 3.4)).to.be.closeTo(6.1, 0.01);
            })
    });
});