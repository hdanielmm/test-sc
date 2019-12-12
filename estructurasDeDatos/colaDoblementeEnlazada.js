class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToHead(element) {
    const newNode = new Node(element, this.head, null);

    if(this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  addAt(element, index) {
    if(index < 0 || index > this.size) {
      return null;
    }

    const newNode = new Node(element, null, null);
    let current = this.head;
    let previous;

    if(index === 0) {
      newNode.next = current;
      current.prev = newNode;
      this.head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      newNode.prev = previous;
      current.prev = newNode;
      previous.next = newNode;
    }
    this.size++;
  }

  addToTail (element) {
    const newNode = new Node(element, null, this.tail);

    if(this.tail){
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  print() {
    let current = this.head;
    let result = "";
    while(current) {
      result += current.value + " <-> ";
      current = current.next
    }
    return result += "X";
  }
}

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.addToHead(7);
doubleLinkedList.addToTail(5);
doubleLinkedList.addToHead(15);
doubleLinkedList.addAt(35, 2);
doubleLinkedList.addToTail(1);
console.log(doubleLinkedList);
console.log(doubleLinkedList.print());