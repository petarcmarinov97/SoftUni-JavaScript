function solve(...params) {

    let myObj={}
    let result=[]

    params.forEach(el=>{
        //Намиране на типа елемент и добавяне на неговата стойност
        let type=typeof(el);
        result.push(`${type}: ${el}`);

        //Броене на колко пъти е срещнат даденият тим елемент(стринг, число, функция)
        if(myObj.hasOwnProperty(type)){
            myObj[type]++;
        }else{
            myObj[type]=1;
        }
    })

    //Сортиране на резултата
    let sortedKeys=Object.keys(myObj);
    sortedKeys.sort((a,b)=>myObj[b]-myObj[a]);

    //Пушваме в резултата обекта 
    sortedKeys.forEach(key=>{
        result.push(`${key} = ${myObj[key]}`)
    })

    //Отпечатваме резултата както ни е казано по условие
    result.forEach(el=>{
        console.log(el);
    })
}

solve('cat', 42, function () { console.log('Hello world!'); });