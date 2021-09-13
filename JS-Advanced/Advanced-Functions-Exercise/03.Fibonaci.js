function getFibonator() {
    let prev = 0;
    let cur = 1;
    let counter = 1;

    function inner() {
        if (counter == 1) {
            counter++;
            return 1;
        }
        let next = prev + cur;
        prev = cur;
        cur = next;
        return cur;
    }
    return inner;
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());