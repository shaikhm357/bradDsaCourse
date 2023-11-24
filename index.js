class HashTable {
  constructor(limit = 14) {
    this.limit = limit;
    this.storage = [];
  }
  _hash(key, max) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % max;
  }
  printTable() {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] !== undefined) {
        console.log(`${i} : ${JSON.stringify(this.storage[i])}`);
      } else {
        console.log(`${i} : "empty"`);
      }
    }
  }
  set(key, value) {
    const index = this._hash(key, this.limit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][i] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }
}

let table = new HashTable(15);
table.set("John", "720-816-601");
table.set("Mahboob", "720-816-601");

table.printTable();
