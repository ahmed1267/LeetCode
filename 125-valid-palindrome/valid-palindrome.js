/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase()
    if (!str) {
        return true
    }

    let rightEdge = str.length - 1
    let leftEdge = 0
    while (rightEdge - leftEdge >= 1) {
        if (str[rightEdge] != str[leftEdge]) {
            return false
        }
        rightEdge--
        leftEdge++
    }
    return true
}