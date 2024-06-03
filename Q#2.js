function q2(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(q2("radar"));   
console.log(q2("doctor"));  
console.log(q2("Anna"));   

