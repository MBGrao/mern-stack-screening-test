function q6(arr) {
    if (arr.length === 0) return arr;
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}
console.log(q6([3, 8, 9, 7, 6]));
