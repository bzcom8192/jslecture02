// Loop with Object
let dataObj = {
    name: "Sombat",
    age: 20,
    isStudent: true,
    address: {
        province: "Nonthaburi",
        contry: "Thailand",
    },
    food: ["KFC", "Pizza", "Burger"],
}

console.log(dataObj.age);
console.log(dataObj.address.province);
console.log(dataObj.food[2]);

console.log("-----------------------")
for (let [key, value] of Object.entries(dataObj)) {
    console.log(key, value)
}

console.log("-----------------------")
for (let value of Object.values(dataObj)) {
    console.log(value)
}

console.log("-----------------------")
for (let key of Object.keys(dataObj)) {
    console.log(key)
}
