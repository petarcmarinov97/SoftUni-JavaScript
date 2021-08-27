function solve(hour,day) {
    let h=Number(hour);
    if(day=="Sunday"){
        console.log("closed");
    }else if(day!="Sunday" && h>=10 && h<=18){
        console.log("open");
    }else{
        console.log("closed");
    }
}