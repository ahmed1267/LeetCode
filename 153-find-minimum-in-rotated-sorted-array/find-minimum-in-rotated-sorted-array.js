/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(!nums) return null
    let left=0
    let right=nums.length-1
    while(left<right){
        let mid=Math.floor(left + (right-left)/2)

        if(mid> 0 && nums[mid]< nums[mid-1]) return nums[mid]
        else if(nums[mid]>= nums[left] && nums[mid]< nums[right]) right=mid-1
        else if(nums[mid]>= nums[left] && nums[mid]> nums[right]) left=mid+1
        else if(nums[mid]< nums[left] && nums[mid]< nums[right]) right=mid-1
    }

    return nums[left]
};