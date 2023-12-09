/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums=nums.sort((a,b)=> a-b)
    permutations=[]
    
    var rcr= function(arr,permutation){
        if(!arr.length) return permutations.push(permutation)
        let prev=-Infinity
        for(let i=0;i<arr.length;i++){
            if(prev===arr[i]) continue;
            nArr= [...arr.slice(0,i),...arr.slice(i+1)]
            rcr(nArr,[...permutation,arr[i]])
            prev=arr[i]
        }

    }
    rcr(nums,[])
    return permutations

};