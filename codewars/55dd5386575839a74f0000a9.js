/**
 * 2023 Dec 9
 * https://www.codewars.com/kata/55dd5386575839a74f0000a9/train/javascript
 * Linked Lists - Alternating Split
 * 
 * After investigating various issues, sent Slack message to Instructor Manley.
 * 
 * Question re: https://www.codewars.com/kata/55dd5386575839a74f0000a9/train/javascript
Code functions as I intend; replit link below (also put in code block at end.). However, Codewars tests do not pass.
https://replit.com/@JamesLee115/AssistanceRequested#index.js
Potential Issue 1:
Newest reply in discussion on Codewars is 2 years old and is hidden.
Changes may have been made since the last comment that cause test not to function as intended.
Potential Issue 2:
Another reply some years ago states original list is not to be mutated.
Rather than extensive refactoring on an issue not mentioned in the description, I thought I would inquire whether this is actually the issue.
Potential Issue 3:
Possible call to nonfunctional components.
Screenshot shows sample test calls buildOneTwo.  Error message states
TypeError: Cannot read properties of undefined (reading 'first')
    at Context.<anonymous> (test.js:108:54)
    at process.processImmediate (node:internal/timers:471:21)
It seems the test is not detecting the return Context(firstHead, secondHead) which should be processed by function Context.
Please advise.  A lot of Codewars problems similarly have descriptions that do not describe actual functionality of code, so some time needs to be wasted experimenting.  Here, though, there's too much outside my experience so rather than spending a few more hours investigating I thought an inquiry best.  :cat_typing:

Will revisit on inquiry resolution.
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  if (!head || !head.next) {
    throw new Error('Head node must not be null or single node.')
  }
  let toggle = true;
  let first = head;
  let second = head.next;
  let firstHead = head;
  let secondHead = head.next;
  let currentNode = head.next.next;
  
  while (currentNode && currentNode.next) {
    console.log("BOTH ADD");
    first.next = currentNode;
    first = first.next;
    second.next = currentNode.next;
    second = second.next;
    currentNode = currentNode.next.next;
  }
  
  if (currentNode) {
    console.log("FIRST ADD")
    first.next = currentNode;
    first = first.next;
  }
  console.log("FIRST", firstHead, "SECOND", secondHead);
  return Context(firstHead, secondHead);
  // Your code goes here.
  // Remember to return the context.
}

const inputArray = [1,2,3,4,5,6];
const headNode = new Node(inputArray[0]);
let currentNode = headNode;
for (let i = 1; i < inputArray.length; i++) {
  const newNode = new Node (inputArray[i]);
  currentNode.next = newNode;
  currentNode = currentNode.next;
}
alternatingSplit(headNode);