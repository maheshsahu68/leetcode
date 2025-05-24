const pivotIndex = (nums) => {
    let max = nums.length;
    let leftSum = new Array(max).fill(0);
    let rightSum = new Array(max).fill(0);

    for (let i = 1 ; i < max ; i++){
        leftSum[i] = nums[i-1] + leftSum[i-1];
    }    

    for (let i = max - 2 ;i >= 0 ; i--){
        rightSum[i] = nums[i+1] + rightSum[i+1];
    }

    for ( let i = 0; i < max ; i++){
        if (leftSum[i] === rightSum[i]) {
            return i;
        }
    }
    return -1;
};


let nums = [1,7,3,6,5,6];
let data = pivotIndex(nums);
console.log(data);