/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let map =new Map()
    for(let i=0;i<arr.length;i++){
        if(!map.has(arr[i]))map.set(arr[i],0)
        map.set(arr[i],map.get(arr[i])+1)
    }
   map = Array.from(map.values())
    map.sort((a,b)=> b-a)
    while(k>0){
        if(map[map.length-1]<=k){
            k-=map[map.length-1]
            map.pop()
        }else k=0
    }
    return map.length
};