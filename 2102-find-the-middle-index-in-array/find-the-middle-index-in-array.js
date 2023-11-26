/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let sum=nums.reduce((prev,curr)=> prev+curr,0)
    let left =0
    for(let i=0;i<nums.length;i++){
        if(sum-left-nums[i]==left) return i
        left+=nums[i]
    }
    return -1
};