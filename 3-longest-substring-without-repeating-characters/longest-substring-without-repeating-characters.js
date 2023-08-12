/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let past = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {

        while (set.has(s[i])) {
            set.delete(s[past])
            past++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - past + 1)
    }
    return maxSize;
}
