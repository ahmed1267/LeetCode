/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let map={}
    for(let i=0;i<nums.length;i++){
        if(!map[nums[i]]) map[nums[i]]=0
        map[nums[i]]+=1
    }
    let n=nums.length
    let res=[]
    while(n>0){
            let arr=[]
        for(let num in map){
            if(map[num]>0){
                map[num]-=1
                n-=1
                arr.push(num)
            }
        }
        res.push(arr)
    }
    return res
};