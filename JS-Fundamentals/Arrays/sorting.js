function sort(input) {

    let copy = input.sort(customSort)
    let arr=[]
    for (let i = 0; i < input.length; i +2) {
        let biggestNumber=input.pop();
        let smallestNumber=input.shift();
        arr.push(biggestNumber,smallestNumber)
    }
console.log(arr.join(` `))


    function customSort(a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else
            return 0;
    }


}
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])