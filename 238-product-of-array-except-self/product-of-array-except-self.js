/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let productR=1
    let result=[]
    for(let i=0;i<nums.length;i++){
        result.push(productR)
        productR*=nums[i]
    }

    let productL=1
    for(let i=nums.length-1;i>=0;i--){

        result[i]*=productL
        productL*=nums[i]
    }
    return result
};