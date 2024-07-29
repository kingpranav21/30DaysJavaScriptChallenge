//Activity - 1

//task - 1
class Node{
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}
const root = new Node(1);
root.next = new Node(2);
root.next.next = new Node(3);

let temp = root;
while (temp !== null) {
    console.log(temp.value);
    temp = temp.next;
}

//task - 2
class LinkedList {
    constructor(head) {
        this.head = null;
    }

    //add nodes
    add(value) {
        const newNode = new Node(value);

        //if empty LL
        if (this.head === null) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = new Node(value);
        }
    }

    //remove nodes from the end
    //1 -> 2 -> 3 -> 4 -> null
    remove() {
        //if empty
        if (this.head === null) {
            console.log('empty');
            return;
        }
        
        //single node
        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let temp = this.head;
        while (temp.next.next !== null) {
            temp = temp.next;
        }
        temp.next = null;
    }

    //display all
    display() {
        //empty
        if (this.head === null) {
            console.log('Empty');
            return;
        }
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}

const LL = new LinkedList();

LL.add(1);
LL.add(4);
LL.add(5);
LL.add(7);

LL.display();

LL.remove();
LL.display();
LL.remove();
LL.display();
LL.remove();
LL.display();
LL.remove();
LL.display();

LL.remove();

//task - 3
//LIFO 
// stack is similar to array
class Stack{
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.empty()) {
          console.log("Empty stack");
          return null;
        }
        this.items.pop();
    }

    peek() {
        if (this.empty()) {
          console.log("Empty stack");
          return null;
        }

        return this.items[this.items.length - 1];
    }

    display() {
        console.log(this.items);
    }
    empty() {
       return this.items.length === 0 ? true : false;
    }
}

const st = new Stack();

st.push(9);
st.push(8);
st.push(6);

st.display();

st.pop();
st.display();

console.log(st.peek());

//task - 4
const reverseString = (str) => {
    const st = new Stack();
    for (let i = 0; i < str.length; i++){
        st.push(str[i]);
    }

    let reversedStr = '';
    while (!st.empty()) {
        reversedStr += st.peek();
        st.pop();
    }
    return reversedStr;
}

const org = 'TurnruT';
const res = reverseString(org);
console.log(res);

//Activity - 3

//task - 5

class Queue{
    constructor() {
        this.items = [];
    }

    enqueue(ele) {
        this.items.push(ele);
    }
    dequeue() {
        if (this.empty()) {
            console.log('Empty');
            return
        }
        return this.items.shift();
    }
    front() {
        if (this.empty()) {
          console.log("Empty");
          return;
        }
        return this.items[0];
    }
    empty() {
        return this.items.length === 0;
    }
    display() {
        console.log(this.items);
    }
}

const q = new Queue();

q.enqueue(34);
q.enqueue(4);
q.enqueue(24);
q.enqueue(37);

q.display();

console.log(q.front());

q.dequeue();
q.dequeue();

q.display();

 
//task - 6
const printer = new Queue();
printer.enqueue('doc 1');
printer.enqueue("doc 2");
printer.enqueue("doc 3");

printer.display();

printer.dequeue();
printer.display();

console.log(printer.front());

//Activity - 4

//task - 7
class TreeNode{
    constructor(value, left, right) {
        this.value = value;
        this.left = null;
        this.right = null;
   }
}

//task - 8
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let curr = this.root;
    let parent = null;

    while (curr !== null) {
      parent = curr;
      if (value < curr.value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    //insert value
    if (value < parent.value) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
  }

  inorder = (root) => {
    if (!root) return;
    this.inorder(root.left);
    console.log(root.value);
    this.inorder(root.right);
  };
  displayInOrder() {
    this.inorder(this.root);
  }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

tree.displayInOrder();

//Activity - 5

//task - 9
class Graph{
    constructor() {
        this.adjacencyList = {}; //node & list of nodes map
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];  // 2 -> []
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            throw new Error('Both vertex are not there')
        }

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    bfs(startVertex) {
        const queue = [startVertex];
        const res = [];
        const visited = {};

        visited[startVertex] = true;

        while (queue.length > 0) {
            const node = queue.shift();//gives & pops the first element like front
            res.push(node);
        

            for (const neighbor of this.adjacencyList[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
           
        }
         return res;
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

console.log(graph.bfs('A'));

//task - 10