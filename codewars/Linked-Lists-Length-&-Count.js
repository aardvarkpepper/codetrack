/**2023 Dec 6
 * https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  if (!head) {
    return 0;
  } else {
    let iterator = 1;
    while (head.next) {
      head = head.next;
      iterator++;
    }
    return iterator;
  }
  // Your code goes here.
}

function count(head, data) {
  if (!head) {
    return 0;
  }
  let iterator = 0;
  while (head) {
    if (head.data === data) {
      iterator++;
    }
    head = head.next;
  }
  return iterator;
  // Your code goes here.
}