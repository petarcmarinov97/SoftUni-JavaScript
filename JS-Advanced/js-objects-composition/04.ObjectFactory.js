//Главна програма
function factory(library, orders) {
    const result = [];
    //Iterate over orders
    for (let order of orders) {
        //Copy order template
        const composed = Object.assign({}, order.template)
        //Compose methods by part list
        for (let part of order.parts) {
            composed[part] = library[part];
        }
        result.push(composed);
    }

    return result;
}

// Начало на входни данни
const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [{
        template: {
            name: 'ACME Printer'
        },
        parts: ['print']
    },
    {
        template: {
            name: 'Initech Scanner'
        },
        parts: ['scan']
    },
    {
        template: {
            name: 'ComTron Copier'
        },
        parts: ['scan', 'print']
    },
    {
        template: {
            name: 'BoomBox Stereo'
        },
        parts: ['play']
    },
];
//Край на входни данни



//Извикване на програмата
const products = factory(library, orders);
console.log(products);
