let findMaxAverage = (nums, k) => {
    let sum = 0;
    for (let i=0 ; i<k ; i++){
        sum += nums[i];        
    }
    let max_sum = sum;
    for (i=k ; i<nums.length ; i++){
        max_sum = max_sum - nums[i-k] + nums[i];
        sum = Math.max(sum,max_sum);
    }
    return sum/k;
};

let nums = [1,12,-5,-6,50,3];
let k = 4;
let data = findMaxAverage(nums , k);
console.log(data);
