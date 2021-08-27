function numbers(arg1,arg2,arg3){
    let numberOne=Number(arg1);
    let numberTwo=Number(arg2);
    let operator=arg3;

    switch(operator){
        case "+":
            if((numberOne+numberTwo)%2==0){
                console.log(`${numberOne} + ${numberTwo} = ${numberOne+numberTwo} - even`);
            }else{
                console.log(`${numberOne} + ${numberTwo} = ${numberOne+numberTwo} - odd`);
            }
            break;
        
        case "-":
                if((numberOne-numberTwo)%2==0){
                    console.log(`${numberOne} - ${numberTwo} = ${numberOne-numberTwo} - even`);
                }else{
                    console.log(`${numberOne} - ${numberTwo} = ${numberOne-numberTwo} - odd`);
                }
                break;

        case "*":
                    if((numberOne*numberTwo)%2==0){
                        console.log(`${numberOne} * ${numberTwo} = ${numberOne*numberTwo} - even`);
                    }else{
                        console.log(`${numberOne} * ${numberTwo} = ${numberOne*numberTwo} - odd`);
                    }
                    break;

        case "/":
                        if(numberTwo==0){
                            console.log(`Cannot divide ${numberOne} by zero`);
                        }else{
                            console.log(`${numberOne} / ${numberTwo} = ${(numberOne/numberTwo).toFixed(2)}`);
                        }
                        break;

                        case "%":
                            if(numberTwo==0){
                                console.log(`Cannot divide ${numberOne} by zero`);
                            }else{
                                console.log(`${numberOne} % ${numberTwo} = ${numberOne%numberTwo}`);
                            }
                            break;
    }
}