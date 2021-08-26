function kampaniq(brdni, brsladkari, brtorti, brgofreti, brpalachinki){
    brdni=Number(brdni);
    brsladkari=Number(brsladkari);
    brtorti=Number(brtorti)*45;
    brgofreti=Number(brgofreti)*5.8;
    brpalachinki=Number(brpalachinki)*3.20;
    let sum=(brtorti+brgofreti+brpalachinki)*(brsladkari*brdni);
    let krainosum=sum-(sum/8);
    console.log(krainosum);
}

kampaniq('5','3','10','10','10')