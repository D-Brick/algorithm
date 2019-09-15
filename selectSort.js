function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let tempItem = arr[i]
        let tempIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < tempItem) {
                tempItem = arr[j]
                tempIndex = j
            }
        }
        if (tempIndex !== i) {
            let temp = arr[tempIndex]
            arr[tempIndex] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

console.log(selectSort([50, 37, 42, 50, 28, 5, 72, 140]))