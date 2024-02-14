/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
 let left=0, right=0
 let res=[]
 for(let i=0;i<nums.length;i++){
     while(nums[left]<0 && left<nums.length) left++
     if(nums[left]>0){
         res.push(nums[left])
         left+=1
         }
     while(nums[right]>0 && right<nums.length)right++
     if(nums[right]<0){
         res.push(nums[right])
         right+=1
     }
 }
 return res
};