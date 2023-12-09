/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/55d9f257d60c5fd98d00001b/train/javascript
 * Linked Lists - Remove Duplicates
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  if (!head) {
    return null;
  }
  let headNode = head;
  let currentVal = head.data;
  let currentNode = head;
  while (currentNode.next) {
    if (currentNode.next.data === currentVal) {
      currentNode.next = currentNode.next.next;
      continue;
    }
    currentNode = currentNode.next;
    currentVal = currentNode.data;
  } // while
  return headNode;
  // Your code goes here.
  // Remember to return the head of the list.
}