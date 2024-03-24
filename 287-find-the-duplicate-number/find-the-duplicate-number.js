/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
   let arr= new Array(nums.length-1).fill(0)
   for(let i =0;i<nums.length;i++){
    if(arr[nums[i]-1]!=0) return nums[i]
    arr[nums[i]-1]+=1
   }
};