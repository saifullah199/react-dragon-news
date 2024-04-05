const obj1 = { 
    name: "Khalid",
    age: 31
}

const obj2 = {...obj1}

obj2.name = "Farhad"

console.log(obj2)
console.log(obj1)