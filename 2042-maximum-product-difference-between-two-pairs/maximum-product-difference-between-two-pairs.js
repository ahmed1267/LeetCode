/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b)=> a-b)
    let n1=nums[0]
    let n4=nums[nums.length-1]
    let n2=nums[1]
    let n3=nums[nums.length-2]
    return (n3*n4)-(n1*n2)

};