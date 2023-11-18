function containSpecialStr(str) {
    const specialCharsList = ['*', '_', '!', '[', '(', '=', '&'];
    for (let i = 0; i < str.length; i++) {
        if (specialCharsList.includes(str[i])) {
            return true;
        }
    }

    return false;
}

function countWord(words) {
    const splitWords = words.split(" ")
    let count = 0

    for (let i = 0; i < splitWords.length; i++) {
        if(!containSpecialStr(splitWords[i])) {
            count++
        } 
    }

    return count
}


let inputA = 'Saat meng*ecat tembok, Agung dib_antu oleh Raihan.';
let outputA = countWord(inputA);
console.log('A: ' + outputA);

let inputB = 'Berapa u(mur minimal[ untuk !mengurus ktp?';
let outputB = countWord(inputB);
console.log('B: ' + outputB);

let inputC = 'Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.';
let outputC = countWord(inputC);
console.log('C: ' + outputC);