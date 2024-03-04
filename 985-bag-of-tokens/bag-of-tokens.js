/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a,b)=> a- b)
    let score=0, max=0,
    l=0, r=tokens.length-1

    while(l<=r){
        if(power>= tokens[l]){
            power-=tokens[l]
            l++
            score++
            max=Math.max(max,score)
        }else if(score>0){
            power+= tokens[r]
            score--
            r--
        }else break;

    }
    return max
};