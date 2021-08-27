function project(name, broi){
    let ime=name;
    let broiproekti=Number(broi);
    let chasove=Number(broiproekti*3);
    console.log(`The architect ${ime} will need ${chasove} hours to complete ${broi} project/s. `);
}

project('Petar', '25')