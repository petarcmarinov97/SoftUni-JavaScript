class List {
    constructor() {
        this.data = [];
        this.size = this.data.length;
    }

    add(value) {
        if (isNaN(value)) {
            throw new Error('Adding element must be a number');
        }
        this.data.push(Number(value));
        this.data.sort((a, b) => a - b);
        this.size++;
        return this;
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            this.data.splice(index, 1)
            this.size--;
            this.data.sort((a, b) => a - b);
        } else {
            throw new Error('Remove Error: index not found');
        }
        return this;
    }

    get(index) {
        if (index >= 0 && index < this.size) {
            return this.data[index];
        } else {
            throw new Error('Get Error: index not found');
        }
        return this;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

