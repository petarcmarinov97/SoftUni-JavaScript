function nums(arr) {

    function max(a, b) {
        return a - b;
    }

   let newArr=arr.sort(max);
    newArr.splice(2)
    console.log(newArr.join(` `))

}
nums([30, 15, 50, 5])