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
  //my pop attempt
  pop() {
    if (this.length === 1) {
      const last = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return last;
    }
    if (this.length > 1) {
      let prev = this.head;
      for (let i = 2; i < this.length; i++) {
        prev = prev.next;
      }
      const last = prev.next;
      prev.next = null;
      this.tail = prev;
      this.length--;
      return last;
    }
  }

  shift() {
    if (this.length >= 1) {
      const shiftedHead = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return shiftedHead;
    }
  }

  unshift(val) {
    const node = new Node(val);

    if (this.length === 0) {
      this.tail = node;
    } else {
      node.next = this.head;
    }
    this.head = node;
    this.length++;
    return this;
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
// list.push("how");
// list.push("are");
// list.push("you");

// console.log("1", list.head);
// console.log("2", list.head.next);
// console.log("3", list.head.next.next);
// console.log("4", list.head.next.next.next);
// console.log("5", list.head.next.next.next.next);

console.log(list.unshift("Rex"));
console.log(list);
