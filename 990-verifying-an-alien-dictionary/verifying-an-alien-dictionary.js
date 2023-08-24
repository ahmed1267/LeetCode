/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {

    let map = new Map()
    for (let i = 0; i < order.length; i++) {
        map.set(order[i], i)
    }

    for (let i = 0; i < words.length-1; i++) {
    
        for (let j = 0; j < words[i].length; j++) {
            if (map.get(words[i][j]) < map.get(words[i + 1][j])) {
                break;
            } else if (map.get(words[i][j]) == map.get(words[i + 1][j])) {
                continue;
            } else {
                return false
            }
        }
    }
    return true

};