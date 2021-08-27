function areaCalculation(shape, num1, num2){
    let area=0;
    if(shape === "square") {
    
    let side = Number(num1);
    
    area = side * side;

    console.log(area);
    
    } else if(shape === "rectangle") {
    
    let sideA = Number(num1);
    
    let sideB = Number(num2);
    
    area = sideA * sideB;
    
    console.log(area);
    }
    else if(shape=="circle"){
        let radius=Number(num1);
        area=3.14159*radius*radius;
        console.log(area);
    }
    else if(shape=="triangle"){
        let strana=Number(num1);
        let visochina=Number(num2);
        area=strana*(visochina/2);
        console.log(area); 
}
    
    }