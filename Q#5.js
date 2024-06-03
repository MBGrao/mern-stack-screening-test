function q5(arr) {
    let count = {};
    let maxCount = 0;
    let mostRepeatedNum = arr[0];
    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
        if (count[num] > maxCount) {
            maxCount = count[num];
            mostRepeatedNum = num;
        }
    }
    return `${mostRepeatedNum} is repeated ${maxCount} times.`;
}
console.log(q5([4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5]));
