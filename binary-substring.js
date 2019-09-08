/**
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
 * 重复出现的子串要计算它们出现的次数。
 * @param {string} s
 * @return {number}
 * @example 
 * 输入: "00110011"
 * 输出: 6
 * 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
 */

function countBinarySubstrings1(str) {
    let result = []
    for (let i = 0; i < str.length - 1; i++) {
        let res = match(str.slice(i))
        if (match(str.slice(i))) {
            result.push(res)
        }
    }
    function match(str) {
        let o = str.match(/^(0+|1+)/) ? str.match(/^(0+|1+)/)[0] : ''
        if (o === '') return
        let l = o[0] ^ 1
        let repeat = o + l.toString().repeat(o.length)
        if (str.indexOf(repeat) === 0) {
            return repeat
        } else {
            return
        }
    }
    return result.length
}

function countBinarySubstrings2(str) {
    let groups = []
    let prev = 0,cur = 1, result = 0
    for (i = 1; i < str.length; i++) {
        if (str[i] !== str[i-1]) {
            prev = cur
            groups.push(prev)
            cur = 1
        } else {
            cur++
        }
        if (i === str.length - 1) {
            groups.push(cur)
        }
    }
    for (i = 1; i < groups.length; i++) {
        result += Math.min(groups[i], groups[i - 1])
    }
    return result
}

function countBinarySubstrings3(str) {
    let prev = 0,cur = 1, result = 0
    for (i = 1; i < str.length; i++) {
        if (str[i] !== str[i-1]) {
            result += Math.min(prev, cur)
            prev = cur
            cur = 1
        } else {
            cur++
        }
        if (i === str.length - 1) {
            result += Math.min(prev, cur)
        }
    }
    return result
}

function countBinarySubstrings4(str) {
    let prev = 0,cur = 1, result = 0
    for (i = 1; i < str.length; i++) {
        if (str[i] !== str[i-1]) {
            prev = cur
            cur = 1
        } else {
            cur++
        }
        if (prev >= cur) result++
    }
    return result
}

console.time('共花费')
console.log(countBinarySubstrings4("11000111000000"))
console.timeEnd('共花费')