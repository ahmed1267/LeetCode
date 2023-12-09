/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    function BT (nums,path){
        if(nums.length==0){
            res.push(path)
            return
        }
        for(let i=0;i<nums.length;i++){
            BT([...nums.slice(0,i),...nums.slice(i+1)],path.concat(nums[i]))
        }
    }
    let res = []
    BT(nums,[])
    return res
};