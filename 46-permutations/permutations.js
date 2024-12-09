/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res=[]
    function rec(nums,path){
        if(nums.length==0){
            res.push(path)
            return
        }
        for(let i=0;i<nums.length;i++){
            rec([...nums.slice(0,i),...nums.slice(i+1)],[...path,nums[i]])
        } 
    }
    rec(nums,[])
    return res
};