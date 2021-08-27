function literatura(broistranici, stranicizachas, dni){
    broistranici=Number(broistranici);
    stranicizachas=Number(stranicizachas);
    dni=Number(dni);
    let sum=(broistranici/stranicizachas)/dni;
    console.log(sum);
}

literatura('100', '15', '3')