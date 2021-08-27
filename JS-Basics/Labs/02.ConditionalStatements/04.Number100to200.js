function num(unit){
    unit=Number(unit);
      if(unit<100){
        console.log("Less than 100");
      }
    else if(unit>=100 && unit<=200){
      console.log("Between 100 and 200");
      }
    else {
      console.log("Greater than 200");
    }
  }