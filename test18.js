// call back function

function showHello() {
    console.log("Hello World");
}

const hi = () => {
    return "Hi..."
}

function wow(p1, p2, p3, p4) {
    console.log("-------------------")
    console.log(p1);
    p2();
    console.log(p3())
    p4();
    console.log("-------------------")
}

wow("This is wow function", showHello, hi, () => { console.log("This is arrow function") });