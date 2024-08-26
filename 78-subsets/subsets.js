/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res=[]
    let sub=[]
    let i=0
    var rec=(sub,i)=>{
        if(i==nums.length){
            res.push([...sub])
            return
        }
        rec([...sub,nums[i]],i+1)
        rec(sub,i+1)
    }
    rec(sub,i)
    return res
};