class Node {
  constructor(val) {
    this.val = val;
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
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    if (this.length === 1) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }
    const prev = this.tail.prev;
    const oldNode = this.tail;
    oldNode.prev = null;
    oldNode.next = null;
    this.tail = prev;
    prev.next = null;
    this.length--;
    return oldNode;
  }
  shift() {
    if (this.length === 0) {
      return;
    }
    const oldNode = this.head;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;

      if (this.length === 1) {
        this.tail = this.head;
      }
    }

    oldNode.next = null;

    return oldNode;
  }
  printAllVal() {
    let node = this.head;
    let index = 0;
    if (this.length === 0) {
      return;
    }
    while (node.next) {
      console.log(`index:${index}:`, node.val);
      node = node.next;
      index++;
    }
    console.log(`index: ${index}:`, node.val);
    console.log("total length:", this.length);
  }
}

const list = new DoublyLinkedList();
list.push(54);
list.push(5);
list.push(4);

console.log(list.shift());

list.printAllVal();
