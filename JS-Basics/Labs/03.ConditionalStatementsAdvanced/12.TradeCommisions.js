function valve(town,prodajbi) {
    
    let s=Number(prodajbi);
    
    if(s<=0){
        console.log("error");
    }
    else if(town=="Sofia"){
        if(s>0 && s<=500){
            console.log((0.05*s).toFixed(2));
        }else if(s>500 && s<=1000){
            console.log((0.07*s).toFixed(2));
        }else if(s>1000 && s<=10000){
            console.log((0.08*s).toFixed(2));
        }else if(s>10000){
            console.log((0.12*s).toFixed(2));
        }
    }else if(town=="Varna"){
        if(s<=500){
            console.log((0.045*s).toFixed(2));
        }else if(s>500 && s<=1000){
            console.log((0.075*s).toFixed(2));
        }else if(s>1000 && s<=10000){
            console.log((0.1*s).toFixed(2));
        }else if(s>10000){
            console.log((0.13*s).toFixed(2));
        }
    }else if(town=="Plovdiv"){
        if(s<=500){
            console.log((0.055*s).toFixed(2));
        }else if(s>500 && s<=1000){
            console.log((0.08*s).toFixed(2));
        }else if(s>1000 && s<=10000){
            console.log((0.12*s).toFixed(2));
        }else if(s>10000){
            console.log((0.145*s).toFixed(2));
        }
    }else{
        console.log("error");
    }  
}