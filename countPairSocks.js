function countPairSocks(arr) {
    let sameSocks = {};
    let countSocks = 0;

    for (let i = 0; i < arr.length; i++) {
        if (sameSocks[arr[i]]) {
            sameSocks[arr[i]]++
        } else {
            sameSocks[arr[i]] = 1;
        }
    }

    for (let sock in sameSocks) {
        countSocks += Math.floor(sameSocks[sock] / 2);
    }

    return countSocks;
}

let inputA = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let outputA = countPairSocks(inputA);
console.log('A: ' + outputA);

let inputB = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
let outputB = countPairSocks(inputB);
console.log('B: ' + outputB);

let inputC = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
let outputC = countPairSocks(inputC);
console.log('C: ' + outputC);