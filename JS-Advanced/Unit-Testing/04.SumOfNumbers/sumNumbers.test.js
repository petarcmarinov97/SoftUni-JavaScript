const { expect }=require('chai');
const sum=require('./sumNumbers');

describe('Sum Numbers', ()=>{
    it('sums single number',()=>{
        expect(sum([1])).to.equal(1);
    });

    //Test overloading
    it('Sums multiple Numbers',()=>{
        expect(sum([1,2])).to.equal(3);
    });

    it('Sums different Numbers',()=>{
        expect(sum([2,3,4])).to.equal(9);
    })
});