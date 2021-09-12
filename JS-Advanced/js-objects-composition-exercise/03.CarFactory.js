function carFactory(obj) {

    //Функция за създаване на мотора и кубратурата му
    function createEngine(hp) {
        const engine = {}
        if (hp <= 90) {
            engine.power = 90;
            engine.volume = 1800;
        } else if (hp <= 120) {
            engine.power = 120;
            engine.volume = 2400;
        } else if (hp <= 200) {
            engine.power = 200;
            engine.volume = 3500;
        }
        return engine;
    }

    //Функция за съставане на цвят и тип на колата
    function createCarriage(color, type) {
        const carriage = {
            color,
            type
        }
        return carriage;
    }

    //Функция за проверка размер на джантите
    function makeWheels(wheelsize) {
        let newSize = Number(wheelsize) % 2 == 0 ? Number(wheelsize) - 1 : Number(wheelsize);
        const wheels = new Array(4).fill(newSize)
        return wheels;
    }

    //Връщане на новия обект с извикване на вече направените функции по горе
    return {
        model: obj.model,
        engine: createEngine(obj.power),
        carriage: createCarriage(obj.color, obj.carriage),
        wheels: makeWheels(obj.wheelsize),
    }

}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));