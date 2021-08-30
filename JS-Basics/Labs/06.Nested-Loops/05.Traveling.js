function solve (input){
    let destination = input.shift();
    let price = Number(input.shift());
    let save = Number(input.shift());
    let savings = save;

    while (destination != "End"){
        save = Number(input.shift());
        savings += save;
        if (savings >= price){
            console.log(`Going to ${destination}!`);
            destination = input.shift();
            price = Number(input.shift());
            savings = 0;
        }
    }

}