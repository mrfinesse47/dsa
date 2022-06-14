//piece of data-val
//reference to next node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //my push solution attempt
  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

const list = new SinglyLinkedList();
list.push("hello");
list.push("there");
list.push("how");
list.push("are");
list.push("you");

console.log("1", list.head);
console.log("2", list.head.next);
console.log("3", list.head.next.next);
console.log("4", list.head.next.next.next);
console.log("5", list.head.next.next.next.next);
