/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let max1=nums.indexOf(Math.max(...nums))
    let min1=nums.indexOf(Math.min(...nums))
    if(max1==min1) return 0
    let bufferMax=-Infinity
    let bufferMin=Infinity
    for(let i=0;i<nums.length;i++){
        if(i==max1 || i==min1) continue;
        if(nums[i]>bufferMax) bufferMax=nums[i]
        if(nums[i]<bufferMin) bufferMin=nums[i]
    }

    return (nums[max1]*bufferMax)-(nums[min1]*bufferMin)

};