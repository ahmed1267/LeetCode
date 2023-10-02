/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    // const n= nums.length;
    // if(n<2){
    //     return false;
    // }
    // const map = new Map();
    // map.set(0,-1);
    // let sum =0;
    // for(let i=0;i<n;++i){
    //     sum+=nums[i];
    //     sum=sum%k;
    //     if(map.has(sum)&& i-map.get(sum)>1){
    //         return true;
    //     }else if(!map.has(sum)){
    //         map.set(sum,i);
    //     }
    // }
    // return false;
    let n =nums.length
    if(n<2) return false;
    let map={}
    map[0]=-1
    let pSum=0
    for(let i=0;i<n;i++){
        pSum+=nums[i]
        rem=pSum%k
        if(map[rem]!= undefined){
            if(i-map[rem]>1) return true
        }
        if(map[rem]==undefined) map[rem]=i
    }
    return false
}