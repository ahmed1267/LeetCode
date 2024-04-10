/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a,b)=> a-b)
    const n =deck.length
    const res=[deck[n-1]]
    for(let i=n-2;i>=0; i--){
        res.unshift(res.pop())
        res.unshift(deck[i])
    }
    return res
};