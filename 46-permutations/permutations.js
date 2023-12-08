/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    if(nums.length<=1) return [nums]
    let curr=nums.pop()
    let prev=permute(nums)
    let ans=[]
    for(let ele of prev){
        for(let i=0;i<=ele.length;i++){
            let nEle=Array.from(ele)
            nEle.splice(i,0,curr)
            ans.push(nEle)
        }
    }
    return ans
};