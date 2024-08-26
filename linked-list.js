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
    const newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail === null) this.tail.next = newNode;
    this.tail = newNode
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail === null) this.tail = newNode;
    this.tail.next = newNode;Z
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head === null) {
      return null;
    }
  
    if (!this.node.next) {
      const nodeToReturn = this.head;
      this.head = null;
      return nodeToReturn;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }

    const nodeToReturn = current.next;
    current.next = null;
    return nodeToReturn
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) { 
      return null;
    }

    if (!this.node.next) {
      const nodeToReturn = this.head;
      this.head = this.head.next;
      nodeToReturn.next = null;
      return nodeToReturn;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0) {
      throw new Error("Index out of bounds");
    }

    let current = this.head;
    let currentIndex =  0;

    while(current) {
      if (currentIndex === idx) {
        return current.value;
      }
      current = current.next;
      currentIndex++;
    }
    throw new Error("Index out of bounds");
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0) {
      throw new Error("Index out of bounds");
    }

    let current = this.head;
    let currentIndex = 0;

    while (current) {
      if (currentIndex === idx) {
        current.value = val;
        return;
      }
      
      current = current.next;
      currentIndex++;
    }
    throw new Error("Index out of bounds");
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0) {
      throw new Error("Index out of bounds");
    }

    const newNode = new Node(val);

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let currentIndex = 0;


    while (current) {
      if (currentIndex === idx - 1) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
      currentIndex++;
    }
    
    throw new Error("Index out of bounds")

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
        if (idx < 0) {
          throw new Error("Index out of bounds");
        }
    
        if (!this.head) {
          throw new Error("Index out of bounds");
        }
    
        if (idx === 0) {
          const valueToReturn = this.head.value;
          this.head = this.head.next;
          return valueToReturn;
        }
    
        let current = this.head;
        let currentIndex = 0;
    
        while (current.next) {
          if (currentIndex === idx - 1) {
            const nodeToRemove = current.next;
            const valueToReturn = nodeToRemove.value;
            current.next = nodeToRemove.next; 
            return valueToReturn;
          }
          current = current.next;
          currentIndex++;
        }
    
        throw new Error("Index out of bounds");
      }
    
    
    average() {
      if (this.length === 0) return 0;
  
      let total = 0;
      let current = this.head;
  
      while (current) {
        total += current.val;
        current = current.next;
      }
  
      return total / this.length;
    }
  }
  

module.exports = LinkedList;
