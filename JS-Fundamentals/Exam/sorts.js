function solve(input){
    let arr=input.shift().map(Number);
    let line = input.shift();
    while (line != "end"){
     if (line.includes("reverse from")){
     
    line= line.split(" ")
    let startInd= Number(line[line.indexOf("from")+1]);
    let countInd= Number(line[line.indexOf("count")+1]);
     
    let spliced= arr.splice(startInd, countInd)
     
    for (let i=0;i<spliced.length; i++){
        let el= spliced[i]
        arr.splice(2,0,el)}
    }
    if (line.includes("sort")){
        line=line.split(" ")
        let start= Number(line[line.indexOf("from")+1]);
    let count= Number(line[line.indexOf("count")+1]);
    let spliced = arr.splice(start, count);
    let sorted = spliced.sort((a, b) => b-a)
    for (let i=0;i<sorted.length; i++){
        let el= sorted[i]
        arr.splice(start,0,el)}
    }
    if (line.includes("remove")){
        line = line.split(" ");
        count = Number(line[1])
        arr.splice(0, count)
     
    } 
    line=input.shift();
    }
    console.log(arr.join(", ")) 
    }
    solve(([["1", "2", "5", "8", "7", "3", "10", "6", "4", "9"],
    "remove 2",
    "end"]))