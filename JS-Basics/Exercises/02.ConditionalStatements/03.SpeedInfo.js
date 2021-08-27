function speed(v){
    v=Number(v);
    if(v<=10){
        console.log("slow");
    }else if(v<=50){
        console.log("average");
    }else if(v<=150){
        console.log("fast");
    }else if(v<=1000){
        console.log("ultra fast");
    }else{
        console.log("extremely fast");
    }
}