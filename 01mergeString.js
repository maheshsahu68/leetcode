const mergeAlternately = (word1, word2) => {
  const max = Math.max(word1.length, word2.length);
  let result = "";
  for (let i = 0; i < max; i++) {
    result += (word1[i] || "") + (word2[i] || "")
  }
  return result
};

const data = mergeAlternately("abc", "pqrstuvw")
console.log(data)