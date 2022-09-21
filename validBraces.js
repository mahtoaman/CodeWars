function validBraces(braces) {
  let q = [];

  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
      q.push(braces[i]);
    } else {
      let last = q.pop();
      if (last === "(" && braces[i] === ")") {
        continue;
      } else if (last === "{" && braces[i] === "}") {
        continue;
      } else if (last === "[" && braces[i] === "]") {
        continue;
      } else {
        return false;
      }
    }
  }
  return q.length === 0;
}
