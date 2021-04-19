//Opdracht 1
function add(num1, num2) {
    return  num1 + num2;
}

add();

//Opdracht 2
function greeter(name) {
    return "Hallo " + name + "!"
}
// console.log(greeter("Rianne"));

//Opdracht 3
function getDetails(firstName, lastName, age) {
    return "Mijn naam is " + firstName + " " + lastName + " en ik ben " + age + " jaar oud."
}
// console.log(getDetails("Rianne", "Honders", "31"));



module.exports = {
    add: add,
    greeter: greeter,
    getDetails: getDetails,
}