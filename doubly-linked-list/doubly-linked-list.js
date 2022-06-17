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
    const prev = this.tail.prev;
    const oldNode = this.tail;
    this.tail = prev;
    prev.next = null;
    this.length--;
    return oldNode;
  }
  printAllVal() {
    let node = this.head;
    let index = 0;
    while (node.next) {
      console.log(`${index}:`, node.val);
      node = node.next;
      index++;
    }
    console.log(`${index}:`, node.val);
    console.log("total length:", this.length);
  }
}

const list = new DoublyLinkedList();
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list.pop());

list.printAllVal();
