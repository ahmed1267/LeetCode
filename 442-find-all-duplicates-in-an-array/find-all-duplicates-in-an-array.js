/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res=[]
    let freq=new Array(Math.max(...nums)+1).fill(0)
    for(let i=0;i<nums.length;i++){
        freq[nums[i]]+=1
    }
    console.log(freq)
    for(let i=0;i<freq.length;i++){
        if(freq[i]==2)res.push(i)
    }
    return res
};