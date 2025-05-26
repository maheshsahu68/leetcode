let moveZeros = (nums) => {
    let max = nums.length ;
    for (let i = 0 ; i <max ; i++){
        for (let j = i+1 ; j < max ; j++){
            if (nums[i] == 0){
                if (nums[j] != 0){
                    [nums[i],nums[j]] = [nums[j],nums[i]];
                    break;
                }
                else{
                    continue;
                } 
            }
        }

    } 
return nums;
}
let nums = [0,1,0,3,12];
let data = moveZeros(nums);
console.log(data);

