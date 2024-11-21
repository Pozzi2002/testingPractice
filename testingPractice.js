function capitalize(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1)
}

function reverseString(str) {
    return str.split("").reverse().join("")
}

let calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    },
    multiply(a, b) {
        return a * b;
    }
}

function caesarCipher(str, shift) {
 const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
 const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
 let strArr = str.split("");
 let total = [];

 strArr.forEach(char => {
    let index;

    if (char === char.toUpperCase()) {
      index = upperAlphabet.indexOf(char);
    } else {    
      index = lowerAlphabet.indexOf(char);
    }

    if (index === -1) {
      total.push(char)

    } else if (char === char.toUpperCase()) {
       if (index + shift >= upperAlphabet.length) {
         let temp = (index + shift) - upperAlphabet.length;
         total.push(upperAlphabet[temp])
       } else {
         total.push(upperAlphabet[index+shift])
       }

    } else {
        if (index + shift >= lowerAlphabet.length) {
          let temp = (index + shift) - lowerAlphabet.length;
          total.push(lowerAlphabet[temp])
        } else {
          total.push(lowerAlphabet[index+shift])
        }
    }
 });

 return total.join("")
};

function analyzeArray(arr) {
 let sortArr = arr.sort();
 let mid = sortArr.length / 2
 
 const object = {
    average: sortArr[mid], 
    min: sortArr[0],
    max: sortArr.at(-1),
    length: arr.length
 }
 
 return object
}
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }
