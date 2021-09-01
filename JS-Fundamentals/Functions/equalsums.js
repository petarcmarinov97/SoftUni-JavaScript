function solve(arr) {
    let isEqual=false;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        //rightSum
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }
        //leftSum
        for (let l =0;l<i;l++ ) {
            leftSum+=arr[l];
        }
        if(leftSum==rightSum){
            isEqual=true;
            console.log(i)
        }
    }
    if(!isEqual){
        console.log(`no`);
    }

}
solve([1, 2, 3, 3])