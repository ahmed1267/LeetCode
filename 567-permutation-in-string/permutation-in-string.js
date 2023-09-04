/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s2.length<s1.length) return false
    let map =new Map()

    for(let i=0;i<s1.length;i++){
        if(!map.get(s1[i])) {
            map.set(s1[i],0)
            }
        map.set(s1[i],map.get(s1[i])+1)

    }
    let left=0
    let right=0
    let req=s1.length
    while(right<s2.length){
        if(map.get(s2[right])>0) req--
        map.set(s2[right],map.get(s2[right])-1)
        right++
        if(req==0) return true
        if(right-left==s1.length){
            if(map.get(s2[left])>=0) req++
            map.set(s2[left],map.get(s2[left])+1)
            left++
        }
    }

    return false
}