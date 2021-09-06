function solve(input){
 
 
    let patReg = /(\*|@)(?<tag>[A-Z]{1}[a-z]{2,})\1:\s{1}\[(?<number1>[a-zA-Z]{1})\]\|\[(?<number2>[a-zA-Z]{1})\]\|\[(?<number3>[a-zA-Z]{1})\]\|$/
 
    while(isNaN(input[0])){
 
        input.shift()
 
    }
 
    let n = input.shift()
 
    for(let data of input){
 
        let [tag,chars] = data.split(": ")
 
        if(patReg.exec(data) && chars.length <= 12){
 
            let sum = []
            let patReg = /(\*|@)(?<tag>[A-Z]{1}[a-z]{2,})\1:\s{1}\[(?<number1>[a-zA-Z]{1})\]\|\[(?<number2>[a-zA-Z]{1})\]\|\[(?<number3>[a-zA-Z]{1})\]\|$/
            let charReg = /\w/g
            let match = patReg.exec(data)
 
            let char = chars.match(charReg)
 
            for(let inp of char){
 
                sum.push(inp.charCodeAt(0))
 
            }
 
            console.log(`${match.groups.tag}: ${sum[0]} ${sum[1]} ${sum[2]}`)
 
        }
        else{
 
            console.log("Valid message not found!")
 
        }
 
    }

}

solve((["3",
"*Request*: [I]|[s]|[i]|",
"*Taggy@: [73]|[73]|[73]|",
"Should be valid @Taggy@: [v]|[a]|[l]|"])

)
