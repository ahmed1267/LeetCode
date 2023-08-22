/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i=0
    while(i<nums.length){
        correctI=nums[i]-1
        if(nums[i]>0&&nums[i]<=nums.length&&nums[i]!=nums[correctI]){
            [nums[i],nums[correctI]]=[nums[correctI],nums[i]]
        }else i++

    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=i+1) return i+1
    }
    return nums.length+1
};