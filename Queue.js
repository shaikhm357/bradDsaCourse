class Queue {
  constructor() {
    this.maxSize = 100;
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  // insert in back
  enqueue(item) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = item;
    this.tail++;
    return true;
  }

  // remove last ele
  dequeue() {
    const item = this.queue[this.head];
    this.head++;
    return item;
  }

  // top value
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.head];
  }

  isEmpty() {
    return this.getLength() === 0;
  }

  isFull() {
    return this.getLength() === this.maxSize;
  }
  getLength() {
    return this.tail - this.head;
  }
}

module.exports = Queue;
