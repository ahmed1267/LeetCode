/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
    let mostFreq = 0
    let max = 0
    const freqHash = {}

    for (let leftEdge = 0, rightEdge = 0; rightEdge < s.length; rightEdge++) {
        const current = s[rightEdge]
        if (!(current in freqHash)) {
            freqHash[current] = 0;
        }
        freqHash[current] += 1
        mostFreq = Math.max(mostFreq, freqHash[current])

        let replacmentNum = rightEdge - leftEdge - mostFreq + 1

        while (replacmentNum > k) {
            const left = s[leftEdge]
            freqHash[left] -= 1
            leftEdge++
            replacmentNum = rightEdge - leftEdge - mostFreq + 1

        }
        max = Math.max(max, rightEdge - leftEdge + 1)
    }
    return max
}