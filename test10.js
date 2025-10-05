// Loop with Array
let dataArr = [
    111,
    "Somjai",
    true,
    555,
    { name: "Sombat", age: 20 },
    [11, 22, 33]
];

// เข้าถึงข้อมูลแต่ละตัวของ Array ใช้ index
console.log(dataArr[1]);
console.log(dataArr[5][1]);

console.log("-----------------------")

// เข้าถึงข้อมูลทุกตัวใน Array
dataArr.forEach((item, index) => {
    console.log(index, item);
});

console.log("-----------------------")
dataArr.map((item, index) => {
    console.log(index, item);
});

console.log("-----------------------")
for (let item of dataArr) {
    console.log(item);
}

console.log("-----------------------")
for (let [index, item] of dataArr.entries()) {
    console.log(index, item);
}