/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    function BS(arr,target,left,right){
        if(left>right) return left
        let mid = Math.floor((right-left)/2)+left
        if(nums[mid]==target) return mid
        
        else if(nums[mid]>target) return BS(arr,target,left,mid-1)
        else if(nums[mid]<target) return BS(arr,target,mid+1,right)
    }
    return BS(nums,target,0,nums.length-1)
};