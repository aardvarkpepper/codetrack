/**
 * 2023 Dec 10
 * https://www.codewars.com/kata/55e725b930957a038a000042/train/javascript
 * Linked Lists - Recursive Reverse
 * 
 * Properly, I imagine this exercise should be done using tail end recursion
 * with last in first out (LIFO) instead of iterative.
 * 
 * I had planned to change the loop implementation to recursion after some
 * testing to see what specific conditions were required.  However the code
 * passed.
 * 
 * Oh well!  A more elegant solution at end.
 */

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function reverse(head, tail = null, contents = []) {
  if (!head) {
    return null;
  }
  while (head) {
    contents.push(head.data);
    head = head.next;
  }
  const newHead = new Node(contents[contents.length-1]);
  let thisNode = newHead;
  for (let i = contents.length-2; i >= 0; i--) {
    let newNode = new Node(contents[i]);
    thisNode.next = newNode;
    thisNode = newNode;
  }
  return newHead;
  // Your code goes here.
}

/**
 * Proper code below
 */

function Node(data = null, next = null) {
  this.data = data
  this.next = next
}

function reverse(list, prev = null) {
  return list ? reverse(list.next, new Node(list.data, prev)) : prev
}