  
const pizzUni = require('./pizzUni');
const expect = require('chai').expect;

describe('work', () => {
    describe('makeAnOrder', () => {
        it('without pizza', () => {
            let onlyDrink = { orderedDrink: 'drink' };
            expect(function() { pizzUni.makeAnOrder(onlyDrink) }).to.throw('You must order at least 1 Pizza to finish the order.');
        })

        it('without drink', () => {
            let onlyPizza = { orderedPizza: 'pizza' };
            expect(pizzUni.makeAnOrder(onlyPizza)).to.equal(`You just ordered ${onlyPizza.orderedPizza}`);
        })

        it('drink and pizza', () => {
            let pizzaDrink = { orderedPizza: 'pizza', orderedDrink: 'drink' };
            expect(pizzUni.makeAnOrder(pizzaDrink)).to.equal(`You just ordered ${pizzaDrink.orderedPizza} and ${pizzaDrink.orderedDrink}.`);
        })
    })

    describe('getRemainingWork', () => {
        //[{pizzaName: ‘the name of the pizza’, status: ‘ready’ / ‘preparing’ }, …]
        let checkIfEqualZero = [{ pizzaName: 'pizza', status: 'ready' }];

        it('equal to zero length', () => {
            expect(pizzUni.getRemainingWork(checkIfEqualZero)).to.equal('All orders are complete!');
        });

        it('equal to zero length', () => {
            let checkIfAboveZero = [{ pizzaName: 'pizza', status: 'prepare' }];
            let pizzaNames = checkIfAboveZero.map(n => n.pizzaName).join(', ');
            expect(pizzUni.getRemainingWork(checkIfAboveZero)).to.equal(`The following pizzas are still preparing: ${pizzaNames}.`);
        });
    })


    describe('orderType', () => {
        let totalSum = 10;
        let typeOfOrder1 = 'Carry Out';
        let typeOfOrder2 = 'Delivery';


        it('if Carry Out return discount', () => {
            expect(pizzUni.orderType(totalSum, typeOfOrder1)).to.equal(9);
        });

        it('if Delivery return totalSum', () => {
            expect(pizzUni.orderType(totalSum, typeOfOrder2)).to.equal(10);
        });
    })
})