function maxIndex(num) {
    let maxIn = 0;
    let numMax = 0;
    if (num.length !==0) {
        for (let i = 0; i < num.length; i++){
            if (numMax < num[i]){
                numMax = num[i];
                maxIn = i;
            }
        }
        return maxIn;
    }
    else {
        return -1
    }
}

console.log(maxIndex([1, 3, 2])) // => index 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // => index 0
console.log(maxIndex([])) // => -1