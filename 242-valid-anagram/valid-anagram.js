/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            let value = map.get(s[i]) + 1
            map.set(s[i], value)
        } else {
            map.set(s[i], 1)
        }
    }

    for (let i = 0; i < t.length; i++) {

        if (map.has(t[i])) {
            let value = map.get(t[i]) - 1

            map.set(t[i], value)

        }
    }
    map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]))

    if (map.entries().next().value[1] == 0) {
        return true
    } else {
        return false
    }

};