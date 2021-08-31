function minimum(first, second, trird) {
    if ((first < second) && (first < trird)) {
        console.log(first);
    } else if (trird<second) {
        console.log(trird);
    } else {
        console.log(second);
    }
}
minimum(2,5,3)