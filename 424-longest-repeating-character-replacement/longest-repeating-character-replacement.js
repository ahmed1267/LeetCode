/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
    let mostFreq=0
    let freq={}
    let max=0

    for(let l=0, r=0;r<s.length;r++){
        let cur=s[r]
        if(!(cur in  freq)) freq[cur]=0
        freq[cur]+=1
        mostFreq=Math.max(mostFreq,freq[cur])
        let rep=r-l-mostFreq+1
        while(rep>k){
            const left=s[l]
            freq[left]-=1
            l++
            // mostFreq=Math.max(mostFreq,freq[l])
            rep=r-l-mostFreq+1
        }
        max=Math.max(max,r-l+1)
    }
    return max

}