function solve(input) {
    let counts = input.shift()
    let sum = 1;
    let br=0
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        br++
        let nums = Number(input[i])
        sum *= nums
        if (br % 3 == 0) {
            total+=sum
            console.log(`The price for the coffee is: $${sum.toFixed(2)}`)
            sum=1
        }
    }
    console.log(`Total: $${total.toFixed(2)}`)
}
solve(([1,
    1.53,
    30,
    8
]))