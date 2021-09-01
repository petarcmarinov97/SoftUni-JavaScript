function leap(arg1){
    if (arg1%4==0 && arg1%100!=0 ||arg1%400==0){
        console.log(`yes`);
    }else console.log(`no`);
}
leap(2000);