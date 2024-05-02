/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums=Array.from(new Set(nums))
    nums=nums.sort((a,b)=> a-b)
    let l=0, r=nums.length-1
    while(l<r){
        let abs=Math.abs(nums[l])
        if(abs == nums[r]) return nums[r]
        else if(abs > nums[r]) l+=1
        else r-=1
    }
    return -1
};