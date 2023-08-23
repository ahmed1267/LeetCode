/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {

    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let value = map.get(arr[i]) + 1
            map.set(arr[i], value)
        } else {
            map.set(arr[i], 1)
        }
    }

    let occ = [...map.values()]
    let set = new Set(occ)

    if (occ.length == set.size) return true
    return false

}