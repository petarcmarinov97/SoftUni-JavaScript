function concatenate(arg1, arg2, arg3, arg4){
    let fname=arg1;
    let lname=arg2;
    let age=Number(arg3);
    let town=arg4;
      console.log(`You are ${fname} ${lname}, a ${age}-years old person from ${town}.`);
    }

concatenate('Petar','Marinov', '23', 'Pleven');