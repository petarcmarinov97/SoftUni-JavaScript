function time(h,s){
    let hour=Number(h);
    let minutes=Number(s)+15;
    if (minutes>=60){
        hour+=1
        minutes=minutes-60;}
    if(hour>=24){
        hour=hour-24;
    }
    if(minutes<=9){
        console.log(`${hour}:0${minutes}`)
    }else{
        console.log(`${hour}:${minutes}`)
    }
}