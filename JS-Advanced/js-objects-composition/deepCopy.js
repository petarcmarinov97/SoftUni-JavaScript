function deepCopy(target){
    if(Array.isArray(target)){
        return target.map(deepCopy);
    }else if (typeof target==`object`){
        return [...Object.entries(target)].reduce((a, [k,v])=> Object.assign(a,{[k]: deepCopy(v)}),{})
    }else{
        return target;
    }
}
const myCopy=deepCopy(`//Попълваме това което искаме да му направим дълбоко копиране`)
console.log(myCopy);