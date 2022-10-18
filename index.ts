import { ILinkedList, INodeLL } from "./interface";

class NodeLL implements INodeLL {
  public data: number;
  public next: any;

  constructor(data: number, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList implements ILinkedList {
  public head: NodeLL | null;
  public size: number;

  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  addFirst(data: number) {
    const newNodeList = new NodeLL(data);
    const head = this.head;

    if (head == null) {
      this.head = newNodeList;
    } else {
      newNodeList.next = head;
      this.head = newNodeList;
    }

    this.size++;
    return true;
  }

  addLast(data: number) {
    const newNodeList = new NodeLL(data);

    if (this.head == null) {
      this.addFirst(data);
    } else {
      let current = this.head;

      while (current?.next) {
        current = current.next;
      }

      current.next = newNodeList;
    }

    this.size++;

    return true;
  }

  addAt(data: number, index: number) {
    if (this.size && index > this.size) {
      return false;
    }

    if (index == 0) {
      this.addFirst(data);
      this.size++;
      return true;
    }

    if (index == this.size) {
      this.addLast(data);
      this.size++;
      return true;
    }

    const newNodeList = new NodeLL(data);
    let current = this.head;
    let prev: NodeLL | null = null;
    let count = 0;

    while (current && count < index) {
      prev = current;
      count++;
      current = current.next;
    }

    newNodeList.next = current;
    if (prev) prev.next = newNodeList;

    this.size++;

    return true;
  }

  getAt(index: number) {
    if (index < 0 || index > this.size) return null;

    let count = 0;
    let current = this.head;

    while (current && count < index) {
      current = current.next;
      if (count == index) break;
      count++;
    }

    return current?.data ?? null;
  }

  removeAt(index: number) {
    if (index < 0 || index > this.size) return false;

    let current = this.head;
    let prev: NodeLL | null = null;
    let next: NodeLL | null = null;
    let count = 0;

    while (current && count < index) {
      prev = current;
      count++;
      current = current.next;
      next = current?.next;
    }

    if (prev) prev.next = next;

    return true;
  }

  printAll() {
    let current = this.head;

    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const node1 = new NodeLL(100);

const LL = new LinkedList();
LL.addFirst(100);
LL.addFirst(200);
LL.addFirst(300);
LL.addLast(400);
LL.addAt(500, 4);

// console.log(LL.getAt(4));
// console.log("================");

LL.removeAt(3);

LL.printAll();
