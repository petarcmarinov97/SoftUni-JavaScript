const { expect }=require('chai');
const isOddOrEven=require('./evenorodd');

describe("isOddOrEven(str)",()=>{
    it("should return true for 'abvcd' ",()=>{
        expect(typeof(isOddOrEven("abc"))==='string').to.be.equal(true);
    });

    it("should return undefined for 123 ",()=>{
        expect(typeof(isOddOrEven(123))==='string').to.be.equal(false);
    });

    it("should return even",()=>{
    expect((isOddOrEven("baba").length)%2==0).to.be.equal(true);
    });

    it("should return odd",()=>{
        expect((isOddOrEven("bab").length)%2==1).to.be.equal(true);
    });
});