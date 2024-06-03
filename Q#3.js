function q3(numbers) {
    if (numbers.length < 2) {
        throw new Error("There must be a minimum of two elements in an array.");
    }
    let largest = numbers[0] > numbers[1] ? numbers[0] : numbers[1];
    let secondLargest = numbers[0] > numbers[1] ? numbers[1] : numbers[0];
    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secondLargest = largest;
            largest = numbers[i];
        } else if (numbers[i] > secondLargest) {
            secondLargest = numbers[i];
        }
    }
    return largest + secondLargest;
}
console.log(q3([3, 7, 1, 5, 11, 19])); 
