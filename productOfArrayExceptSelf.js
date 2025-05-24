const productExceptSelf = (nums) => {
    const n = nums.length;
    const output = [];
    
    const leftProducts = [];
    const rightProducts = [];
    leftProducts[0] = 1;
    rightProducts[n-1] = 1;

    for (let i=1 ; i < n ; i++ ){
        leftProducts[i] = leftProducts[i-1] * nums[i-1];
    }
    for (let i = n-2 ; i >=0 ; i--){
        rightProducts[i] = rightProducts[i+1] * nums [i+1];
    }
    for (let i = 0 ; i < n ; i++){
        output [i] = leftProducts[i] * rightProducts [i];
    }
    return output
};

let nums = [1,2,3,4];
let data = productExceptSelf (nums);
console.log (data);
