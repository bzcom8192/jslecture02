// break, continue ใน loop
// break; ใน loop เมื่อถูกทำงานจะจบ loop
// continue; ใน loop เมื่อถูกทำงานจะจบรอบนั้นทันที ให้ทำรอบต่อไป

let data1 = 100;
let data2 = "SAU";
let data3 = {
    name: "a"
}

console.log(data1 + " wow " + data2);
console.log(data1, "wow", data2);
console.log(data1, " wow ", data3);
console.log(`${data1} wow ${data3}`);

for (let x = 1; x <= 5; x++) {
    if (x == 3) {
        console.log(x, "Breaking...")
        break;
    }
    console.log(x, "DTI");
}
console.log("---------------------");
for (let y = 1; y <= 5; y++) {
    if (y == 3) {
        console.log(y, "Skipping...")
        continue;
    }
    console.log(y, "DTI");
}
console.log("---------------------");