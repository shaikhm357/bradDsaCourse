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

  set(key, value) {
    const index = this._hash(key, this.limit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }
  get(key) {
    const index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      return undefined;
    }

    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        return this.storage[index][i][1];
      }
    }
  }

  remove(key) {
    const index = this._hash(key, this.limit);
    if (this.storage[index]) {
      if (
        this.storage[index].length === 1 &&
        this.storage[index][0][0] === key
      ) {
        delete this.storage[index];
      } else {
        for (let i = 0; i < this.storage[index].length; i++) {
          if (this.storage[index][i][0] === key) {
            delete this.storage[index][i];
          }
        }
      }
    }
  }

  has(key) {
    const index = this._hash(key, this.limit);
    if (this.storage[index]) {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return true;
        }
      }
    }
    return false;
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
  clear() {
    this.storage = [];
  }

  getValues() {
    const values = [];
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        for (const [key, value] of this.storage[i]) {
          values.push(value);
        }
      }
    }
    return values;
  }
}

let table = new HashTable(15);

table.set("John", "720-816-601");
table.set("Mahboob", "720-816-601");
table.set("Sara", "982-816-601");

console.log(table.has("Mahboob"));

table.remove("Mahboob");
console.log(table.has("Mahboob"));

// table.clear();
console.log(table.getValues());

table.printTable();
