function solve(input) {

    let copy = input.sort(customSort)
    console.log(copy.join(`\n`))
    function customSort(a, b) {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else
            return a.localeCompare(b);  //a.localeCompare(b) Проверка по втори критерии за подредба по азбучен ред
    }

}
solve(["alpha", "beta", "gamma"])