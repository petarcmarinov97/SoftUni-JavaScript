class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        let output = [];
        products.forEach(product => {
            let [name, quantity, price] = product.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            if (price <= this.budgetMoney) {
                if (this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] += quantity;
                }
                else {
                    this.stockProducts[name] = quantity;
                }
                this.budgetMoney -= price;

                output.push(`Successfully loaded ${quantity} ${name}`)
            }
            else {
                output.push(`There was not enough money to load ${quantity} ${name}`)
            }

        });
        this.history = this.history.concat(output);
        return output.join('\n');
    }

    addToMenu(meal, productsNeeded, price) {
        let allMeals = Object.keys(this.menu).length;
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`
        }
        
        this.menu[meal] = {products: productsNeeded, price};
        allMeals++;
        if (allMeals === 1) {
             return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        }
        else {
            return `Great idea! Now with the ${meal} we have ${allMeals} meals in the menu, other ideas?`;
        }
    }

    showTheMenu() {
        let allMeals = Object.keys(this.menu).length;
        if (allMeals === 0) {
             return ("Our menu is not ready yet, please come later...");
        }

        let output = [];

        for (const meal in this.menu) {
            if (Object.hasOwnProperty.call(this.menu, meal)) {
                const element = this.menu[meal];
                const { _, price} = element;
                output.push(`${meal} - $ ${price}`);
            }
        }
        return output.join('\n');
    }
    
    makeTheOrder(meal) {
        const allMeals = Object.keys(this.menu);
        if (!allMeals.includes(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        
        const {products, price} = this.menu[meal];
        
        for (const product of products) {
            const [name, quantity] = product.split(' ');
            if (this.stockProducts[name] < quantity || !this.stockProducts[name]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }            
        }

        for (const procduct of products) {
            const [name, quantity] = procduct.split(' ');
            this.stockProducts[name] -= quantity;
        }
        this.budgetMoney += price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`
    }
}



class Restaurant {
    constructor(budget) {
        this.budgetMoney = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
 
    loadProducts(products) {
        products.forEach(element => {
            const [name, quantity, price] = element.split(' ');
            if (Number(price) <= this.budgetMoney) {
                if (!this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] = Number(quantity);
                    this.budgetMoney -= Number(price);
                } else {
                    this.stockProducts[name] +=Number(quantity);
                    this.budgetMoney -= Number(price);
                }
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
        });
        return this.history.join('\n');
    }
 
    addToMenu(meal, ingedients, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                ingedients,
                price
            };
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
 
        if (Object.keys(this.menu).length === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }
 
    }
 
    showTheMenu() {
        if (Object.keys(this.menu).length <= 0) {
            return `Our menu is not ready yet, please come later...`;
        }
        let menuMeals = '';
        for (const [key, value] of Object.entries(this.menu)) {
            menuMeals += `${key} - $ ${value.price}\n`;
        }
        return menuMeals.trim();
    }
 
    makeTheOrder(meal) {
        if(!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        } else {
            let neededProducts = this.menu[meal].ingedients;
            for(let i = 0; i < neededProducts.length; i++) {
                const params = neededProducts[i].split(' ');
                const quantity = params.pop();
                const product = params.join(' ');
                if(this.stockProducts[product] && this.stockProducts[product] >= Number(quantity)) {
                    this.stockProducts[product] -=Number(quantity);
                } else {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                }
            }
            this.budgetMoney += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        }
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
