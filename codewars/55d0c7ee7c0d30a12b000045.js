/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/55d0c7ee7c0d30a12b000045/train/javascript
 * Linked Lists - Insert Sort
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertSort(head) {
  console.log(head);
  if (head === null) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  let dataArray = [];
  while (head) {
    dataArray.push(head.data);
    head = head.next;
  }
  dataArray.sort((a,b) => a-b);
  console.log(dataArray);
  let headNode = new Node (dataArray[0]);
  let thisNode = headNode;
  for (let i = 1; i < dataArray.length; i++) {
    let newNode = new Node (dataArray[i]);
    thisNode.next = newNode;
    thisNode = newNode;
  }
  console.log(headNode);
  return headNode;
  // Your code goes here.
  // Remember to return the head of the list.
}