function exam(arg1,arg2,arg3,arg4){
    let examHour=Number(arg1);
    let examMin=Number(arg2);
    let hourArrival=Number(arg3);
    let minArrival=Number(arg4);

    let examTotalMinutes=(examHour*60)+examMin;
    let arriveTotalMinutes=(hourArrival*60)+minArrival;

    if(arriveTotalMinutes>examTotalMinutes){
        console.log("Late");
    }else if(examTotalMinutes-arriveTotalMinutes<=30){
        console.log("On time");
    }else{
        console.log("Early");
    }

    let result=Math.abs(examTotalMinutes-arriveTotalMinutes);
    if(examTotalMinutes-arriveTotalMinutes>0){
        if(result<60){
            console.log(`${result} minutes before the start`);
        }else if(result%60<10){
            console.log(`${parseInt(result/60)}:0${result%60} hours before the start`);
    }else{
        console.log(`${parseInt(result/60)}:${result%60} hours before the start`);
    }
}else if(arriveTotalMinutes-examTotalMinutes>0){
    if(result<60){
        console.log(`${result} minutes after the start`);
    }else if(result%60<10){
        console.log(`${parseInt(result/60)}:0${result%60} hours after the start`);
}else{
    console.log(`${parseInt(result/60)}:${result%60} hours after the start`);
}
}
}