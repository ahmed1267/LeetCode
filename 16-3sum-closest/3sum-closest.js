/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums=nums.sort((a,b)=> a-b)
    let closest=nums[0]+nums[1]+nums[2]
    let n=nums.length
    for(let i=0;i<n-2;i++){
        let left=i+1
        let right=n-1
        while(left<right){
            let currSum=nums[i]+nums[left]+nums[right]
            if(currSum==target) return currSum
            else if(currSum<target){
                left++
            }else if(currSum>=target){
                right--
            }
            if(Math.abs(currSum-target)<Math.abs(closest-target)) closest=currSum
        }
    }
    return closest
};