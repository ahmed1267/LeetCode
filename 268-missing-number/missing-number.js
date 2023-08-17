/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // nums=nums.sort((a,b)=> a-b)
    // if(nums[0]!=0)return 0
    // for(let i=0;i<nums.length;i++){
    //     if(Math.abs(nums[i]-nums[i+1])!= 1) return nums[i]+1
    // }
    let newNum=new Array(nums.length+1)
    for(let i=0;i<newNum.length;i++){
        newNum[nums[i]]=nums[i]
    }
    for(let i=0;i<newNum.length;i++){
        if(newNum[i]== undefined) return i
    }
};