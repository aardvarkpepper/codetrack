/**
 * 2023 Dec 10
 * https://www.codewars.com/kata/55e5d31bf7ca1e44980000a7/solutions/javascript
 * Linked Lists - Sorted Merge
 */

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function sortedMerge(first, second) {
  console.log(first, second)
  if (!first) {
    return second;
  }
  if (!second) {
    return first;
  }
  let headNode = null;
  let returnNode = null;
  // maybe initiate tempNodes if redefining "first" is problematic.
  if (first.data <= second.data) {
    headNode = first;
    first = first.next;
  } else {
    headNode = second;
    second = second.next;
  };
  returnNode = headNode;
  while (first && second) {
    if (first.data <= second.data) {
      headNode.next = first;
      first = first.next;
      headNode = headNode.next;
    } else {
      headNode.next = second;
      second = second.next;
      headNode = headNode.next;
    }
  } // while
  while (first) {
    headNode.next = first;
    first = first.next;
    headNode = headNode.next;
  }
  while (second) {
    headNode.next = second;
    second = second.next;
    headNode = headNode.next;
  }
  console.log(headNode)
  return returnNode;
  // Your code goes here.
}

/*
Recursive approach below
*/

function Node(data = null, nxt = null) {
  this.data = data, this.next = nxt;
}
function sortedMerge(first, second) {
  if(!first) return second;
  if(!second) return first;
  return first.data < second.data ? new Node(first.data, sortedMerge(first.next, second)) : new Node(second.data, sortedMerge(first, second.next));
}