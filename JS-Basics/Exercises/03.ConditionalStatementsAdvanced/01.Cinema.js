function kino(kino,red,kolona){
    let r=Number(red);
    let k=Number(kolona);
    if(kino=="Premiere"){
        console.log(`${(12.00*r*k).toFixed(2)} leva`);
    }else if(kino=="Normal"){
        console.log(`${(7.50*r*k).toFixed(2)} leva`);
    }else if(kino=="Discount"){
        console.log(`${(5.0*r*k).toFixed(2)} leva`);
    }
}