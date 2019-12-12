class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
    return this.stack;
  }

  pop() {
    this.stack.pop();
    return this.stack;
  }

  peek() {
    return this.stack[this.stack.length-1];
  }

  size() {
    return this.stack.length;
  }

  print() {
    console.log(this.stack);
  }
}

const stack = new Stack();
console.log("In", stack.push(10000));
console.log("In", stack.push(5000));
console.log("In", stack.push(3000));
console.log("size", stack.size());
console.log("Out", stack.pop());
console.log("Show last one", stack.peek());