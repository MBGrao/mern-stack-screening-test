function q1(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let count = new Array(max - min + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }
    let sortedIndex = 0;
    for (let i = count.length - 1; i >= 0; i--) {
        while (count[i] > 0) {
            arr[sortedIndex++] = i + min;
            count[i]--;
        }
    }
    return arr;
}
console.log(q1([3, 2, 7, 4, 6, 9]));
