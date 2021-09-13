const { expect }=require('chai');
const lookupChar=require('./char');

describe("lookupChar(str,index)",()=>{

    it("should return undifined",()=>{
        expect(lookupChar(13,3)).to.be.equal(undefined);
    });

    it("should return undifined",()=>{
        expect(lookupChar(`Pesho`,1.12)).to.be.equal(undefined);
    });

    it("should return undifined",()=>{
        expect(lookupChar(`Pesho`,`Gosho`)).to.be.equal(undefined);
    });

    it("should return undifined",()=>{
        expect(lookupChar(13,`b`)).to.be.equal(undefined);
    });

    it("should return return Incorrect index ",()=>{
        expect(lookupChar('Petar',-1)).to.be.equal("Incorrect index");
    });

    it("should return return Incorrect index ",()=>{
        expect(lookupChar('Petar',5)).to.be.equal("Incorrect index");
    });

    it("should return return Incorrect index ",()=>{
        expect(lookupChar('Petar',6)).to.be.equal("Incorrect index");
    });
    
    it("should return the character at the specified index ",()=>{
        expect(lookupChar('Petar',3)).to.be.equal("a");
    });
   
});