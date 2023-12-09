/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left=1
    let right=Math.max(...piles)
    let best=right

    const totalTime= speed=> piles.reduce((sum,pile)=>sum+Math.ceil(pile/speed),0 )
    while(left<=right){
        let mid = left+Math.floor((right-left)/2)
        if(totalTime(mid)<=h){
            best=mid
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return best
};