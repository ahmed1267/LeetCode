/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s2.length < s1.length) return false
    // let map =new Map()

    // for(let i=0;i<s1.length;i++){
    //     if(!map.get(s1[i])) {
    //         map.set(s1[i],0)
    //         }
    //     map.set(s1[i],map.get(s1[i])+1)

    // }
    // let left=0
    // let right=0
    // let req=s1.length
    // while(right<s2.length){
    //     if(map.get(s2[right])>0) req--
    //     map.set(s2[right],map.get(s2[right])-1)
    //     right++
    //     if(req==0) return true
    //     if(right-left==s1.length){
    //         if(map.get(s2[left])>=0) req++
    //         map.set(s2[left],map.get(s2[left])+1)
    //         left++
    //     }
    // }

    // return false
    let s1Count=new Array(26).fill(0), s2Count=new Array(26).fill(0)
    for(let i=0;i<s1.length;i++){
        s1Count[s1.charCodeAt(i)-'a'.charCodeAt(0)]+=1
        s2Count[s2.charCodeAt(i)-'a'.charCodeAt(0)]+=1
    }
    let matches=0
    for(let i=0;i<26;i++){
        if(s1Count[i]==s2Count[i]) matches+=1
    }

    let l=0
    for(let r=s1.length;r<s2.length;r++){
        if(matches==26) return true
        index=s2.charCodeAt(r)-'a'.charCodeAt(0)
        s2Count[index]+=1
        if(s1Count[index]==s2Count[index]) matches+=1
        else if(s1Count[index]+1==s2Count[index]) matches-=1

        index=s2.charCodeAt(l)-'a'.charCodeAt(0)
        s2Count[index]-=1
        if(s1Count[index]==s2Count[index]) matches+=1
        else if(s1Count[index]-1==s2Count[index]) matches-=1
        l+=1
    }

    return matches==26
    // let map = {}
    // for (let i = 0; i < s1.length; i++) {
    //     if (!map[s1[i]]) map[s1[i]] = 0
    //     map[s1[i]] += 1
    // }
    // let map2={...map}
    // for(let i=0;i<s2.length;i++){
    //     let index=i
    //     while(map2[s2[index]]>0&& index<s2.length){
    //         map2[s2[index]]-=1
    //         index++
    //     }
    //     if(Object.values(map2).every(item => item === 0)) return true
    //     Object.assign(map2,map)
    // }
    // return false


}