let findDifference = (nums1, nums2) => {
    let result1 = nums1.filter(x => ! nums2.includes(x));
    let result2 = nums2.filter(y => ! nums1.includes(y));
    let set1 = new Set(result1);  
    let set2 = new Set(result2);
    let result = [Array.from(set1),Array.from(set2)];
    return result;   
};

let nums1 = [1,2,3,3];
let nums2 = [1,1,2,2];
let data = findDifference (nums1,nums2);
console.log(data);
