// function คือ การทำงานหนึ่งๆ จะไม่ทำงานถ้าไม่เรียกใช้ call function
// จะเรียกใช้ function ที่ไหน เมื่อไร กี่ครั้งก็ได้

// parameter คือ ตัวแปรประเภทหนึ่งใช้ได้เฉพาะใน function โดยเขียนอยู่ใน () หลังชื่อ function
// return คือ คำสั่ง ที่มี 2 ความหมาย 1. เป็นการจบการทำงานของ Function 2. ส่งค่ากลับไปจุดเรียกใช้ Function

// มี 4 รูปแบบ ใหญ่ๆ
// 1. no parameter, no return

function showHello() {
    console.log("Hello");
}

showHello();    // call function