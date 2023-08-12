/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    var BS = function(nums,target,left,right){
        if(left>right)return -1
        let mid= left+Math.floor((right-left)/2)
        if(nums[mid]==target) return mid
        if(nums[left]<=nums[mid]){
            if(target<nums[mid]&&target>=nums[left]) return BS(nums,target,left,mid-1)
            else return BS(nums,target,mid+1,right)
        }else{
            if(target>nums[mid]&&target<=nums[right]) return BS(nums,target,mid+1,right)
            else return BS(nums,target,left,mid-1)
        }
    }
    return BS(nums,target,0,nums.length-1)
};