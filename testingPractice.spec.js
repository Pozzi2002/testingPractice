import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./testingPractice.js"


test('Takes a string and returns with first character capitalized', () => {
    expect(capitalize('nikita')).toBe('Nikita')
});

test('takes a string and returns it reversed', () => {
    expect(reverseString('Nikita')).toBe("atikiN")
});

test('take two numbers and return the correct calculation', () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.subtract(2, 2)).toBe(0);
    expect(calculator.divide(2, 2)).toBe(1);
    expect(calculator.multiply(2, 2)).toBe(4);
});

test('takes a string and a shift factor and returns it with each character “shifted”', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('takes an array of numbers and returns an object with the following properties: average, min, max, and length', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
});