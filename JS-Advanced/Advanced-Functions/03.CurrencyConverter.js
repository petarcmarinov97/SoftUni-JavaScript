function createFormatter(separator, symbol, symbolFirst, formatFunc) {

    let result = function (value) {
        return formatFunc(separator, symbol, symbolFirst, value)
    }
    return result;

}

