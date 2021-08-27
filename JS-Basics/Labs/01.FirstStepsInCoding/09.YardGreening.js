function yard(num1){
    let kvadrati=Number(num1);
    let suma=kvadrati*7.61;
    let discount=Number(suma)*0.18;
    let krainasuma=suma-discount;

    console.log(`The final price is: ${krainasuma} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yard('50');