/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let l,r
  k=k%nums.length
  l=0,r=nums.length-1
  reverse(l,r,nums)
  l=0, r=k-1
  reverse(l,r,nums)
  l=k, r=nums.length-1
  reverse(l,r,nums)
  return nums
};

function reverse(l,r,nums){
  while(l<r){
    [nums[l],nums[r]]= [nums[r],nums[l]]
    l++
    r--
  }
  return nums
}