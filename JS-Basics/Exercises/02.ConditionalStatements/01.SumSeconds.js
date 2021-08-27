function time(time1,time2,time3){
    let t1=Number(time1);
    let t2=Number(time2);
    let t3=Number(time3);
    let totaltime=t1+t2+t3;
    let minutes=Math.floor(totaltime/60);
    let seconds=totaltime%60;
    if (seconds<10){
        console.log(`${minutes}:0${seconds}`);
    }
        else{
            console.log(`${minutes}:${seconds}`);
        }
    }