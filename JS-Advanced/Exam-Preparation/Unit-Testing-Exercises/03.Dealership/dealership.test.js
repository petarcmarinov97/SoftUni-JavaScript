const {expect} = require('chai');
const dealership = require('./dealership');

describe('Dealership', () => {

    //newCarCost
    describe('newCarCost', () => {
        it('Return newCarPrice', () => {
            let discountForOldCar = {
                'Audi A4 B8': 15000,
                'Audi A6 4K': 20000,
            }
            expect(dealership.newCarCost('Audi A5 B8', 25000)).to.equal(25000);
        });

        it('Return finalPrice after discount', () => {
            let discountForOldCar = {
                'Audi A4 B8': 15000,
                'Audi A6 4K': 20000,
            }
            expect(dealership.newCarCost('Audi A4 B8', 25000)).to.equal(10000);
        });

        it('Return finalPrice after discount', () => {
            let discountForOldCar = {
                'Audi A4 B8': 15000,
                'Audi A6 4K': 20000,
            }
            expect(dealership.newCarCost('Audi A4 B8', 15000)).to.equal(0);
        });
    });

    //carEquipment
    describe('carEquipment', () => {
        it('Return the extras', () => {
            let extras = ['heated seats', 'sliding roof', 'radio', 'heater'];
            let indexes = [1, 2, 3];
            expect(dealership.carEquipment(extras,indexes)).to.eql(['sliding roof', 'radio', 'heater']);
        });

        it('Return the extras if the index are empty', () => {
            let extras = ['heated seats', 'sliding roof', 'radio', 'heater'];
            let indexes = [];
            expect(dealership.carEquipment(extras,indexes)).to.eql([]);
        });
    });

    //euroCategory
    describe('euroCategory', () => {
        it('Return the result >=4', () => {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
        });

        it('Return the result >=4', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
        });

        it('Return the result <4', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
        });
    });
});