function factory(library, orders) {

let result=[];

//Интериране
for (const order of orders) {
    //Взимане на темплейта от импут
    const composed=Object.assign({},order.template)
    //Взимане на партс от инпут 
    for (let part of order.parts){
        composed[part]=library[part]
    }
    result.push(composed);
}
return result;
}

//Входни данни
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

const products = factory(library, orders);
console.log(products);

const player=products[3]
player.play(`Petar`,`Obicham te ovcu`)