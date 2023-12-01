/*
2023 Dec 1
https://leetcode.com/problems/validate-stack-sequences/description/
*/

var validateStackSequences = function (pushed, popped) {
  const arrInst = [];
  let pushedIndex = 0;
  for (const each of popped) {
      if (each === arrInst[arrInst.length-1]) {
          arrInst.pop();
          continue; // If in storage, retrieves and continues.
      };
      while (pushedIndex < pushed.length && each !== pushed[pushedIndex]) {
          arrInst.push(pushed[pushedIndex]);
          pushedIndex++; // If not in storage, iterates until finds.
      };
      if (pushedIndex === pushed.length) {
          return false; // Condition true if last element tested and not equal to each.  If was not in storage and was not in found, then must be false.
      }
      if (each === pushed[pushedIndex]) {
          pushedIndex++;
          continue;
      };
  }
  return true; // if no false has been triggered, then true
};

/*
Better summed up by
var validateStackSequences = function(pushed, popped) {
    const stack = []

    for(let num of pushed){
        stack.push(num)
         
        while(stack.length > 0 && popped[0] == stack[stack.length-1]){
            stack.pop()
            popped.shift()
        }
    }

    return stack.length ==0 
};
*/