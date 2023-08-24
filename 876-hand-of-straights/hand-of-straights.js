/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {

    if (hand.length % groupSize != 0) return false;
    hand = hand.sort((a, b) => a - b)
    let map = new Map()
    for (let i = 0; i < hand.length; i++) {
        map.set(hand[i], (map.get(hand[i]) || 0) + 1)
    }
    for (let i = 0; i < hand.length; i++) {
        if (map.get(hand[i]) == 0) {
            continue;
        }

        for (let j = 0; j < groupSize; j++) {
            let curr = hand[i] + j
            if (map.get(curr) == 0 || map.get(curr)== undefined) {

                return false
            }
            map.set(curr, map.get(curr) - 1)
        }
    }
    return true
}