/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.tail === null) this.tail = newNode;

    newNode.next = this.head;

    this.head = newNode;

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;
    if (current.next) {
      while (current.next !== this.tail) {
        current = current.next;
      }
      const oldTail = this.tail;

      this.tail = current;

      this.tail.next = null;

      this.length--;

      return oldTail.val;
    }
    const oldTail = this.tail;
    this.head = null;
    this.tail = null;
    this.length--;
    return oldTail.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head.next === null) this.tail = null;

    const oldHead = this.head;

    this.head = this.head.next;

    this.length--;

    return oldHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    let current = this.head;

    for (let i = 0; i !== idx; i++) {
      current = current.next;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    let current = this.head;

    for (let i = 0; i !== idx; i++) {
      current = current.next;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (this.length === 0) this.push(val);
    else {
      let newNode = new Node(val);
      let current = this.head;

      for (let i = 0; i !== idx - 1; i++) {
        current = current.next;
      }

      if (idx === this.length) this.tail = newNode;

      newNode.next = current.next;

      current.next = newNode;

      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let current = this.head;

    for (let i = 0; i !== idx; i++) {
      current = current.next;
    }
    const oldItem = current.next;

    if (current.next) current.next = current.next.next;

    if (current === this.head) this.head = null;

    if (current.next === null) this.tail = current.next;

    this.length--;

    return oldItem;
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let total = 0;

    while (current !== null) {
      total += current.val;
      current = current.next;
    }
    return this.length === 0 ? 0 : total / this.length;
  }
}

module.exports = LinkedList;
