function radians(input){
    let radians=Number(input);
    let degrees=radians*180/Math.PI;
    console.log(degrees.toFixed(0));
  }

radians(5);