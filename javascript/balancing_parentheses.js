function balancingParentheses(string) {
  const strArray = string.split("");
  const chars = { "(": 0, ")": 0 };

  if (strArray.length === 1) {
    return 1;
  }

  for (let char of strArray) {
    chars[char]++;
  }

  const solution = Math.abs(Object.values(chars)[0] - Object.values(chars)[1]);

  return string[0] === ")" && string[strArray.length - 1] === "("
    ? solution + 2
    : solution;
}

/**
 Split string to array for looping
 make a hash with keys of ( and )
 */

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses("(()())"));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses("()))"));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(")"));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses(")((((()))((())))()(()))("));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
