const {chromium}=require('playwright-chromium');
const {expect}=require('chai');

let browser;
let page;

describe('SoftUni Tests',function (){
    this.timeout(10000);

    before(async()=>{
        browser=await chromium.launch();
    });

    after(async ()=>{
        await browser.close()
    });

    beforeEach(async ()=>{
        page=browser.newPage();
    })

    afterEach(async ()=>{
        await page.close();
    })


    it('Should load trainers page', async()=>{
        await page.goto('http://softuni.bg/');
        await page.click('text=ПРЕПОДАВАТЕЛИ')

        let heading=await page.textContent('.trainers-page-content-header-info-title');
        expect(heading.trim()).to.be.equal('Преподаватели');
    })
})

