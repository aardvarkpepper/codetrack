/**
 * 2023 Dec 6
 * https://www.codewars.com/kata/55be95786abade3c71000079/train/javascript
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  const newNode = new Node(data);
  newNode.next = head;
  return newNode
  // Go.
}

function buildOneTwoThree(array = [3,2,1]) {
  let returnNode = null;
  for (const each of array) {
    let instanceNode = null;
    instanceNode = push(returnNode, each);
    returnNode = instanceNode;
  }
  return returnNode;
  // Go.
}