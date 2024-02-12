/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    nums.sort((a, b) => b - a)
    // let c = 1
    // let n = nums.length
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] == nums[i - 1]) c += 1
    //     if (nums[i] != nums[i - 1]) c = 1
    //     if (c > Math.floor(n / 2)) return nums[i]
    // }
    let n =  Math.floor(nums.length/2)
    if(nums.length==1) return nums[0]
    if(nums[n]==nums[n-1]) return nums[n]
    else return nums[n+1]

};