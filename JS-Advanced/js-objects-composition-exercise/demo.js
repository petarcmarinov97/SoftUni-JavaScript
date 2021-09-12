function solve(obj) {

    function engine(hp) {
        const engine = {}

        if (hp <= 90) {
            engine.power = 90;
            engine.volume = 1800;
        } else if (hp > 90 && hp <= 120) {
            engine.power = 120;
            engine.power = 2400;
        } else if (hp > 120 && hp <= 200) {
            engine.power = 200;
            engine.volume = 3500;
        }

        return engine;
    }

    function carriage(type, color){
        const carriage={
            type,
            color,
        }

        return carriage;
    }

    function wheels(wheelsize){
        let newSize=Number(wheelsize);
        if(newSize%2==0){
            newSize--;
        }else{
            newSize;
        }
    const wheels=new Array(4).fill(newSize)
    return wheels;
    }

    return {
        model: obj.model,
        power: engine(obj.power),
        carriage: carriage(obj.carriage,obj.color),
        wheelsize: wheels(obj.wheelsize),
    }
}
console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));