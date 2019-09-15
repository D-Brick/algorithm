function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length - i; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([50, 37, 42, 28, 5, 72, 140]))