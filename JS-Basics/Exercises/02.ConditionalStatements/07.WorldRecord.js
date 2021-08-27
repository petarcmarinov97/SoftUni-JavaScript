function record(worldRecord,distanceInMeters,timeInSec){
    
    let record=Number(worldRecord);
    let distance=Number(distanceInMeters);
    let secondsForMeter=Number(timeInSec);

    let distanceSeconds=distance*secondsForMeter;
    let delay=Math.floor(distance/15)*12.5;
    let totaltime=distanceSeconds+delay;
    if (totaltime<record){
        console.log(`Yes, he succeeded! The new world record is ${totaltime.toFixed(2)} seconds.`);
       
    }else{
        console.log(`No, he failed! He was ${(totaltime-record).toFixed(2)} seconds slower.`);
    }
}