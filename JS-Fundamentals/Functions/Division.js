function division(n){

    let divider=0;

    if(n%10===0){
        divider+=10;
    }else if(n%7===0){
        divider+=7;
    }else if(n%6===0){
        divider+=6
    }else if(n%3===0){
        divider+=3;
    }else if(n%2==0){
        divider+=2;
    }

    if(divider!=0){
    console.log(`The number is divisible by ${divider}`);}
    else{
        console.log(`Not divisible`);
    }

}
division(12);