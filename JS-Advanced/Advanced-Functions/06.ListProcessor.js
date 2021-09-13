function solution(input) {
    let result = [];

    for (const string of input) {
        const [command, value] = string.split(' ');
        if (command === 'add') { add(value); }
        else if (command === 'remove') { remove(value); }
        else if (command === 'print') { print(value); }
    }

    function add(text) {
        result.push(text);
    }
    function remove(text) {
        result = result.filter(x => x != text);
    }
    function print() {
        console.log(result.join(','));
    }
}