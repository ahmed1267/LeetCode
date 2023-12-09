/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    
    let map = new Map()
    for (let i = 0; i < words.length; i++) {
        if (!map.get(words[i])) {
            map.set(words[i], 1)
        } else {
            map.set(words[i], map.get(words[i]) + 1)
        }
    }
    map = [...map.entries()].sort(function(a,b) {
        if(a[1]==b[1]){
            return a[0].localeCompare(b[0])
        }else{
            return b[1]-a[1]
        }
    })
    
    return map.slice(0,k).map(item=> item[0])
};