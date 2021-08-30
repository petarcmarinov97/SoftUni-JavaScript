function valve(arg){
    let etaji=Number(arg[0]);
    let stai=Number(arg[1]);
    
    for(let i=etaji;i>0;i--){
        let result= "";
        for(let j=0;j<stai;j++){
            if(etaji==i){
                result+=`L${i}${j} `
            }else if(i%2==0){
                result+=`O${i}${j} `
            }else{
                result+=`A${i}${j} `
            }
    }
    console.log(result)
    }
    }