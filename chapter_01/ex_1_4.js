var stringy = "Mr. John Smith"

function replaceFn (input) {
  var replaceWith = "%20"
  return input.replace(/ /g, replaceWith)
}

console.log(replaceFn(stringy));
