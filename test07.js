// switch
let bus_no = 57;

switch (bus_no) {
    case 84: {
        console.log("ไปวัดไร่ขิง");
        break;
    }
    case 57: {
        console.log("พาต้า");
        break;
    }
    case 123, 80: {
        console.log("สนามหลวง");
        break;
    }
    case 515: {
        console.log("อนุสาวรีย์ชัยสมรภูมิ");
        break;
    }
    default: {
        console.log("ไม่ทราบเส้นทาง");
    }
}
