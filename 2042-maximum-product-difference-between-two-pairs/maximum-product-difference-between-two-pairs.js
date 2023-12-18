/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let max1I=nums.indexOf(Math.max(...nums)) // index of first max
    let min1I=nums.indexOf(Math.min(...nums)) // index of first min
    if(max1I==min1I) return 0 // if the max = min then the whole array is the same number
    let max2=-Infinity
    let min2=Infinity
    for(let i=0;i<nums.length;i++){
        if(i==max1I || i==min1I) continue;
        if(nums[i]>max2) max2=nums[i]
        if(nums[i]<min2) min2=nums[i]
    }

    return (nums[max1I]*max2)-(nums[min1I]*min2)

};