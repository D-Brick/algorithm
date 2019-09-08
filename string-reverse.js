/** 
* @param {str} -传入的字符串，单词由空格分隔
* @return -返回结果，单词顺序不变，每个单词的字母顺序翻转
* @example -输入："let's chinese basketball run"，输出："s'tel esenihc llabteksab nur"     
*/

function strReverse(str) {
    return str.split(/\s/).map((item) => {
        return item.split('').reverse().join('')
    }).join(' ')
}

console.log(strReverse('let\'s chinese basketball run'))