// identifier: variable name, function name, constant, class name, object


// variable
var dti01 = 10;
let dti02 = 20;
const dti03 = 30;

{
    var dti04 = 40;
    let dti05 = 50;
    const dti06 = 60;

    console.log(dti01, dti02, dti03, dti04, dti05, dti06);

    let dti02 = 200;
    console.log(dti02);
}

console.log(dti01, dti02, dti03, dti04);