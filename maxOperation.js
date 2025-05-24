const maxOperations = function (nums, k) {
  let map = new Map();
  let count = 0;
  for (let num of nums) {
    let temp = k - num;
    if (map.get(temp) > 0) {
      count++;
      map.set(temp, map.get(temp) - 1);
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }
  return count;
};

let nums = [1, 2, 3, 4];
let k = 5;
let result = maxOperations(nums, k);
console.log(result);
