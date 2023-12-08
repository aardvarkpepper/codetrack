/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/55cc33e97259667a08000044/train/javascript
 * Linked Lists - Sorted Insert
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  const original = head;
  const newNode = new Node(data);
  if (head === null) {
    return newNode;
  }
  if (data < head.data) {
    newNode.next = head;
    return newNode;
  }
  while (head.next && head.next.data < data) {
    head = head.next;
  }
  if (!head.next) {
    head.next = newNode;
    return original;
  }
  newNode.next = head.next;
  head.next = newNode;
  return original; 
  // Your code goes here.
  // Remember to return the head of the list.
}