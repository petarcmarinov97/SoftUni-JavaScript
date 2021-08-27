function cal(a1,a2,a3){
    a1=Number(a1);
    if(a2=="mm" && a3=="m"){
        console.log((a1/1000).toFixed(3));
    }else if(a2=="mm" && a3=="cm"){
        console.log((a1/10).toFixed(3));
    }else if(a2=="m" && a3=="mm"){
        console.log((a1*1000).toFixed(3));
    }else if(a2=="m" && a3=="cm"){
        console.log((a1*100).toFixed(3));
    }else if(a2=="cm" && a3=="m"){
        console.log((a1/100).toFixed(3));
    }else{
        console.log((a1*10).toFixed(3));
    }
}