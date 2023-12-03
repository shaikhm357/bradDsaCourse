class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  insert(index, data) {
    if (index < 0 || index > this.length) {
      return null;
    }
    if (index === 0) {
      return this.prepend(data);
    }
    if (index === this.length) {
      return this.append(data);
    }

    const newNode = new Node(data);
    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    newNode.prev = current;
    current.next.prev = newNode;
    current.next = newNode;

    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (index === this.length - 1) {
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.length--;
  }

  contains(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  printAll() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

module.exports = DoublyLinkedList;
