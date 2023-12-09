/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/55da347204760ba494000038/train/javascript
 * Linked Lists - Move Node
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

function moveNode(source, dest) {
  if (!source) {
    throw new Error('Source list is empty')
  }
  let storage = source;
  source = source.next;
  storage.next = dest;
  // Your code goes here.
  // Remember to return the context.
  return new Context(source, storage);
}