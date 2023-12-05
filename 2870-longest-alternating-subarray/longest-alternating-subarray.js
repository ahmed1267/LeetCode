/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function(nums) {
    let i=1
    let max=-1

    while(i<nums.length){
        while(i<nums.length && nums[i]- nums[i-1]!=1) i++
        let count =1
        let val =1
        while(i<nums.length && nums[i]-nums[i-1]==val){
            count+=1
            val*=-1
            max = Math.max(max,count)
            i++
        }
    }
    return max
};