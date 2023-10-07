/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let minL=Infinity
    let l=0
    let r=0
    let sum=nums[0]
    while(l<=r && r<nums.length){
        if(sum>=target){
            minL=Math.min(minL,r-l+1)
            sum-=nums[l]
            l++
        }else{
            r++
            sum+=nums[r]
        }
    }

    return minL== Infinity? 0: minL
};