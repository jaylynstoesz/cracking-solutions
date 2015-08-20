var string1 = "hello"
var string2 = "world"


// For loop solution:
function uniqueForLoop (input) {
  for (var i = 1; i < input.length; i++) {
    if (input[i] === input[i-1]) {
      return "Not unique"
    }
  }
}

console.log(uniqueForLoop(string1));
console.log(uniqueForLoop(string2));

// Recursive solution:

var i = 1
function uniqueRecursive (input) {
  if (i === input.length) {
    console.log("All of this word's letters are unique.");
    return true
  }
  console.log("input[i]", input[i]);
  console.log("input[i-1]", input[i-1]);
  if (input[i] === input[i-1]) {
    console.log("This word has duplicated letters.");
    return false
  } else {
    i++
    uniqueRecursive(input)
  }
}

console.log(uniqueRecursive(string1));
console.log(uniqueRecursive(string2));
