function bonus(num1){
    num1=Number(num1);
    let bonus=0.0
    if(num1<=100){
        bonus=5;
        }else if(num1>1000){
            bonus=num1*0.1;
        }else{
            bonus=num1*0.2;
        }    
    if(num1%2==0){
        bonus+=1;
    }else if(num1%10==5){
        bonus+=2;
    }
    console.log(bonus);
    console.log(num1+bonus);
}