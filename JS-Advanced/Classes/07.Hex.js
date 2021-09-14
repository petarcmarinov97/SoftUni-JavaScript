class Hex {
    constructor(v = 0) {this.v = v}
    valueOf() {return this.v}
    toString() {return '0x' + this.v.toString(16).toUpperCase()}
    parse (str) {return str.toString(16)}
    plus (n) {return new Hex(this.v + n)}
    minus (n) {return new Hex(this.v - n)}
  }