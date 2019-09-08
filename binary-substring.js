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

function tool(str) {
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

console.log(tool("11001100"))