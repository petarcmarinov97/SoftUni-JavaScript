function solve(input) {
    let myStr = input.slice(0, 1)[0];
 
    for (const line of input.slice(1)) {
        let [cmd, index, value] = line.split('|');
        if (cmd == 'Decode') {
            console.log(`The decrypted message is: ${myStr}`)
            break;
        } else {
            switch (cmd) {
                case 'ChangeAll':
                    changeAll(index, value)
                    break;
                case 'Insert':
                    insert(index, value)
                    break;
                case 'Move':
                    move(index)
                    break;
 
                default:
                    break;
            }
        }
 
    }
 
    function changeAll(subStr, replacement) {
        if (myStr.includes(subStr)) {                        // 50/100
            let pattern = RegExp(subStr, 'g');               // ------
            myStr = myStr.replace(pattern, replacement)      // ------
        }                                                    // ------
 
 
 
        // while(myStr.includes(subStr)){                   // 100/100
 
        //     myStr = myStr.replace(subStr,replacement);   // --------
        // }                                                // --------
    }
 
    function insert(index, value) {
        let validation = Number(index) >= 0 && Number(index) <= myStr.length;
        if (validation) {
            let newStr = myStr.split('')
            newStr.splice(+index, 0, value)
            myStr = newStr.join('')
        }
    }
 
    function move(indexEnd) {
        let validation = Number(indexEnd) >= 0 && Number(indexEnd) <= myStr.length;
        if (validation) {
            let newStr = myStr.split('')
            newStr = [...newStr.slice(+indexEnd), ...newStr.slice(0, +indexEnd)]
            myStr = newStr.join('');
        }
    }
}