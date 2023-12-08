/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/55cacc3039607536c6000081/train/javascript
 * Linked Lists - Insert Nth Node
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  let original = head;
  const insertedNode = new Node (data);
  if (head === null) {
    return insertedNode;
  }
  if (index === 0) {
    insertedNode.next = head;
    return insertedNode;
  }
  /*
  Say head, 1, data
  
  */
  while (index != 1) {
    head = head.next;
    index--;
  }
  insertedNode.next = head.next;
  head.next = insertedNode;
  
  // Your code goes here.
  // Return the head of the list.
  return original;
}