function solve(n1, n2) {
    function fact(n) {
        let nfac = 1;
        for (i = 1; i <= n; i++) {
            nfac *= i;
        }
        return nfac;
    }

    console.log((fact(n1)/fact(n2)).toFixed(2));

}
solve(5, 2)