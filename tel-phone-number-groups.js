function tool(str) {
    let pool = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    let strArr = str.split('')
    let group = []
    for (let i = 0; i < strArr.length; i++) {
        let char = strArr[i]
        group.push(pool[char])
    }
    let arrPrev = group[0].split('')
    for (let i = 1; i < group.length; i++) {
        let items = group[i].split('')
        let arrCur = []
        for (let j = 0; j < arrPrev.length; j++) {
            for (let k = 0; k < items.length; k++) {
                arrCur.push(arrPrev[j] + items[k])
            }
        }
        arrPrev = arrCur
    }
    return arrPrev
}
tool("2345")