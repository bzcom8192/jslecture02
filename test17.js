// Arrow function
// ใช้หลักการเดียวกับ Function Expression

let data1 = () => "Hello World";
let data2 = (n1, n2) => n1 + n2;

console.log(data1());
console.log(data2(10, 20));

console.log("-------------------")

// กรณี parameter มีแค่ตัวเดียว ไม่ต้องใส่ ()
let info1 = param1 => {
    console.log(`Info1: ${param1}`);
};

// กรณี คำสั่งมีแค่บรรทัดเดียว ไม่จำเป็นต้องใส่ {}
let info2 = param1 => console.log(`Info2: ${param1}`);

let info3 = () => {
    return 111;
}

// กรณีที่คำสั่งการทำงานมีคำสั่งเดียว และเป็น return หากไม่ใช้ {} ต้องไม่มี return
let info4 = () => 111;