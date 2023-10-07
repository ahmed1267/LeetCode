/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

    
    let minL = Infinity
    let rightEdge = 0
    let leftEdge = 0
    let sum = nums[0]
    while (leftEdge <= rightEdge && rightEdge < nums.length) {
        if (sum >= target) {
            minL = Math.min(minL, rightEdge - leftEdge + 1)
            sum -= nums[leftEdge]
            leftEdge++
        } else {
            rightEdge++
            sum += nums[rightEdge]
        }

    }
    return minL== Infinity? 0 : minL
};