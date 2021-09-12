function solve(name, population, treasury) {

    const city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent) {
            this.treasury-=Math.ceil(this.treasury * percent/100);
        },
    }

    return city;
}

const result = solve('Tortuga', 7000, 15000)
result.collectTaxes();
result.applyGrowth(10);
result.applyRecession(5);

console.log(result);
