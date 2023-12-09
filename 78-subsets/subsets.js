/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res=[]
    let sub=[]
    let i=0
    var rec=(nums,sub,i)=>{
        if(i==nums.length){
            res.push([...sub])
            return
        }
        rec(nums,[...sub,nums[i]],i+1)
        rec(nums,sub,i+1)
    }
    rec(nums,sub,i)
    return res
};