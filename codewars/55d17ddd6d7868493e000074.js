/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/55d17ddd6d7868493e000074/train/javascript
 * Linked Lists - Append
 */

function append(listA, listB) {
  if (listA === null) {
    return listB;
  }
  if (listB === null) {
    return listA;
  }
  const headNode = listA;
  let nextNode = listA;
  while (nextNode.next) {
    nextNode = nextNode.next;
  }
  nextNode.next = listB;
  // Your code goes here.
  // Remember to return the head of the list.
  return headNode;
}