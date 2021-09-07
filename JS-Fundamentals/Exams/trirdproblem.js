function solve(arr) {
    let book = arr.shift().split('&')

    for (let i = 0; i < arr.length; i++) {
        let b = arr[i].split(' | ')
        let command = b[0]
        let item = b[1]
        let item2 = b[2]

        if (command === 'Add Book') {
            if (!book.includes(item)) {
                book.unshift(item)
            }
        }
        if (command === 'Take Book') {
            if (book.includes(item)) {
                let index = book.indexOf(item)
                book.splice(index, 1)
            }
        }
        if (command === 'Swap Books') {
            if (book.includes(item) && book.includes(item2)) {
                let index = book.indexOf(item)
                let index2 = book.indexOf(item2)
                book[index] = item2;
                book[index2] = item
            }
        }
        if (command === 'Insert Book') {
            book.push(item)
        }
        if (command === 'Check Book') {
            item = Number(item)
            if (item >= 0 && item < book.length) {
                let f=book.slice(item,item+1)
                console.log(f.join(''))
            }
        }
        if(command === 'Done'){
            console.log(book.join(', '))
        }


    }

}
solve(["Anna Karenina&Heart of Darkness&Catch-22& The Stranger",
"Add Book | David Copperfield",
"Add Book | One Thousand and One Nights",
"Swap Books | One Thousand and One Nights | Catch-22",
"Take Book | David Copperfield",
"Insert Book | The Stories of Anton Chekhov",
"Check Book | 17",
"Done"])
)