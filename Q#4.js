function q4(arr) {
    let max = Math.max(...arr);
    let present = new Set(arr);
    let missing = [];
    for (let i = 0; i <= max; i++) {
        if (!present.has(i)) {
            missing.push(i);
        }
    }
    return missing;
}
console.log(q4([3, 4, 9, 1, 7, 3, 2, 6]));
