/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // let map ={}
    // map[0]=1
    // let pSum=0
    // let res=0
    // for(let i=0;i<nums.length;i++){
    //     pSum+=nums[i]
    //     diff=pSum-k
    //     if(map[diff]) res+=map[diff]
    //     map[pSum]? map[pSum]+=1 : map[pSum]=1
    // }
    // return res
    let map = new Map();
    let pSum = 0;
    let res = 0;
    map.set(0,1);
    for (let i=0;i<nums.length;i++) {
        pSum += nums[i];
        if (map.has(pSum-k)) res += map.get(pSum-k);
        if (map.has(pSum)) map.set(pSum, map.get(pSum)+1);
        else map.set(pSum, 1);
    }
    return res;
};