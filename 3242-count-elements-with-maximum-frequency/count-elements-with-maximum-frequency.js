/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let maxFreq=0
    let map=new Map()
    let res=0    
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])) map.set(nums[i],0)
        map.set(nums[i],map.get(nums[i])+1)
        if(maxFreq<map.get(nums[i])){
            maxFreq=map.get(nums[i])
            res=maxFreq
        }else if(maxFreq == map.get(nums[i]))res+=maxFreq
    }
    return res
};