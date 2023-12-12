/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let num1=nums.splice(nums.indexOf(Math.max(...nums)),1)
    let num2=Math.max(...nums)
    return (num1-1)*(num2-1)
};