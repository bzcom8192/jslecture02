// 4. have parameters, has return

function add(a, b) {
    return a + b;
}

function showHelloAndBye(fname, lname) {
    console.log("Hello " + fname + " " + lname);
    return "Bye " + fname + " " + lname;
}

console.log(add(10, 20));
console.log(showHelloAndBye("John", "Doe"));

