// operator
// Arithmetic operator + - * / % **
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);
console.log(2 ** 3);

// Comparison operator > < >= <= == === != !==

console.log("Sombat" < "Somjai");
console.log("Bangkok" >= "Bangpoo");

// Logical operator && || !
console.log(true && false);
console.log(true || false);
console.log(!true);


// Ternary operator ? :
let age = 20;
let isAdult = (age >= 18) ? true : false;
console.log(isAdult);

// increment and decrement operator ++ --
let a = 10;
console.log(a);
a++;
console.log(a);
a--;
console.log(a);

// nullish coalescing operator ?? ใช้ตรสวจสอบค่า null หรือ undefined
let aa = null;
let bb;
let cc = 'DTI-SAU';

console.log(aa ?? 'Hello');
console.log(bb ?? 'Hi');
console.log(cc ?? 'Hey');