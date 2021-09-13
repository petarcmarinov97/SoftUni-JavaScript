function solve(area,vol,inputJSON){

    const myObj=JSON.parse(inputJSON)
    
    const result=[];

    for (const object of myObj) {
        const areaS=area.call(object);
        const volV=vol.call(object);
        const obj={
            area: areaS,
            volume: volV,
        };
        result.push(obj)
    }
return result;
}


const example1=`[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    
console.log(solve(area,vol,example1));

function area() {
        return Math.abs(this.x * this.y);
};

function vol() {
        return Math.abs(this.x * this.y * this.z);
};



