/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result=[]
    nums.sort((a,b)=> a-b)
    for(let i=0;i<nums.length-2;i++){
        if(i===0||nums[i]!==nums[i-1]){
            let low=i+1 , hi=nums.length-1 , sum = 0 - nums[i]
            while(low<hi){
                if(nums[low]+nums[hi]==sum){
                    result.push([nums[i],nums[low],nums[hi]])
                    while(low<hi&& nums[low]==nums[low+1])low++;
                    while(hi>low&& nums[low]== nums[hi-1])hi--;
                    low++;
                    hi--;
                    
                }else if(nums[low]+nums[hi]<sum){
                    low++;
                }else if (nums[low]+nums[hi]>sum){
                    hi--;
                }
            }
        }
    }
    return result;
};