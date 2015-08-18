var string1 = "hello"
var string2 = "world"

function unique (input) {
  // for (var i = 1; i < input.length; i++) {
  //   if (input[i] === input[i-1]) {
  //     return "Not unique"
  //   }
  // }
  if (i === input.length) {
    return "done!"
  }
  var i = 1
  if (input[i] === input[i-1]) {
    return "Not unique"
  } else {
    unique(input)
  }
}

console.log(unique(string1));
console.log(unique(string2));
